import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, Clock, UserPlus, MessageCircle, Award } from 'lucide-react'

interface NotificationModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
  onDecline: () => void
  type: 'recruitment' | 'message' | 'project_update'
  title: string
  message: string
  senderName?: string
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  onAccept,
  onDecline,
  type,
  title,
  message,
  senderName
}) => {
  if (!isOpen) return null

  const getIcon = () => {
    switch (type) {
      case 'recruitment':
        return <UserPlus className="w-8 h-8 text-blue-500" />
      case 'message':
        return <MessageCircle className="w-8 h-8 text-green-500" />
      case 'project_update':
        return <Award className="w-8 h-8 text-purple-500" />
      default:
        return <MessageCircle className="w-8 h-8 text-gray-500" />
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            {getIcon()}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            {senderName && (
              <p className="text-sm text-gray-500">来自 {senderName}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">{message}</p>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={onDecline}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Clock className="w-4 h-4" />
            <span>再等等</span>
          </button>
          <button
            onClick={onAccept}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Check className="w-4 h-4" />
            <span>同意</span>
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </motion.div>
    </div>
  )
}

export default NotificationModal
