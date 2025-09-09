import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Users, Zap, Star, Play, Music, Palette, Code, PenTool, TrendingUp } from 'lucide-react'
import { categories } from '../data/categories'

const HomePage: React.FC = () => {
  const iconMap = {
    '🎬': Play,
    '🎵': Music,
    '🎨': Palette,
    '✍️': PenTool,
    '💻': Code,
    '📈': TrendingUp
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              创合矩阵
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-200 font-light">
              Quantum Echo
            </p>
            <p className="text-xl md:text-2xl mb-8 text-purple-200">
              量子共振，质效跃升
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              以任务为导向的临时团队组建平台，连接创意人才，打造高效协作生态
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/categories"
                className="bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span>探索专区</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button 
                onClick={() => {
                  // 检查是否支持PWA安装
                  if ('serviceWorker' in navigator && 'PushManager' in window) {
                    // 触发安装提示
                    const event = new CustomEvent('showInstallPrompt')
                    window.dispatchEvent(event)
                  } else {
                    alert('您的浏览器支持PWA安装！请使用Chrome、Edge或Safari浏览器访问以获得最佳体验。')
                  }
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>安装 App</span>
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse-slow delay-500"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              为什么选择创合矩阵？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们重新定义了团队协作的方式，让创意与效率完美结合
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: '精准匹配',
                description: '基于技能标签的智能匹配系统，快速找到最合适的人才'
              },
              {
                icon: Zap,
                title: '高效协作',
                description: '临时团队快速组建，项目导向的协作模式'
              },
              {
                icon: Star,
                title: '质量保证',
                description: '作品集展示，技能认证，确保团队质量'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              专业领域
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              覆盖创意产业的各个领域，为每个项目找到最专业的人才
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Play
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/talent/${category.id}`}
                    className="block p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 4).map((sub) => (
                        <span
                          key={sub.id}
                          className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                        >
                          {sub.name}
                        </span>
                      ))}
                      {category.subcategories.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          +{category.subcategories.length - 4}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              开始你的创意之旅
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              加入创合矩阵，与最优秀的创意人才一起创造奇迹
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                立即注册
              </Link>
              <Link
                to="/categories"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                浏览人才
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
