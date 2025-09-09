import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Smartphone, Monitor, Apple, Chrome } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop'>('desktop')

  useEffect(() => {
    // 检测设备类型
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    setDeviceType(isMobile ? 'mobile' : 'desktop')

    // 检查是否已安装
    if (window.matchMedia('(display-mode: standalone)').matches || 
        (window.navigator as any).standalone === true) {
      setIsInstalled(true)
      return
    }

    // 监听安装提示事件
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      
      // 延迟显示安装提示
      setTimeout(() => {
        setShowInstallPrompt(true)
      }, 3000)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      
      if (outcome === 'accepted') {
        console.log('用户接受了安装提示')
      } else {
        console.log('用户拒绝了安装提示')
      }
      
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // 24小时内不再显示
    localStorage.setItem('installPromptDismissed', Date.now().toString())
  }

  // 检查是否在24小时内被拒绝过
  useEffect(() => {
    const dismissed = localStorage.getItem('installPromptDismissed')
    if (dismissed) {
      const dismissedTime = parseInt(dismissed)
      const now = Date.now()
      const hoursPassed = (now - dismissedTime) / (1000 * 60 * 60)
      
      if (hoursPassed < 24) {
        setShowInstallPrompt(false)
      }
    }
  }, [])

  if (isInstalled || !showInstallPrompt) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Download className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                安装创合矩阵
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                将创合矩阵添加到您的{deviceType === 'mobile' ? '手机' : '电脑'}主屏幕，获得更好的使用体验
              </p>
              
              <div className="flex items-center space-x-2 mb-3">
                {deviceType === 'mobile' ? (
                  <>
                    <Smartphone className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500">快速访问，离线使用</span>
                  </>
                ) : (
                  <>
                    <Monitor className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500">桌面应用体验</span>
                  </>
                )}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={handleInstall}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium text-sm hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                >
                  立即安装
                </button>
                <button
                  onClick={handleDismiss}
                  className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* 安装说明 */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              {deviceType === 'mobile' ? (
                <>
                  <div className="flex items-center space-x-1">
                    <Chrome className="w-3 h-3" />
                    <span>Chrome</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Apple className="w-3 h-3" />
                    <span>Safari</span>
                  </div>
                </>
              ) : (
                <span>支持 Chrome、Edge、Safari 等浏览器</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default InstallPrompt
