import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Edit3, Save, X, Plus, Trash2, Star, MapPin, Calendar, Award } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { PortfolioItem } from '../types'

const ProfilePage: React.FC = () => {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    username: user?.username || '',
    bio: user?.bio || '',
    skills: user?.skills || [],
    experience: user?.experience || ''
  })
  const [newSkill, setNewSkill] = useState('')
  const [showAddSkill, setShowAddSkill] = useState(false)

  const handleSave = () => {
    // 这里应该调用API更新用户信息
    setIsEditing(false)
  }

  const handleAddSkill = () => {
    if (newSkill.trim() && !editData.skills.includes(newSkill.trim())) {
      setEditData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }))
      setNewSkill('')
      setShowAddSkill(false)
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setEditData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }))
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">请先登录</h1>
          <p className="text-gray-600">您需要登录才能查看个人资料</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-sm p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face'}
                alt={user.username}
                className="w-32 h-32 rounded-2xl object-cover"
              />
              {isEditing && (
                <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.username}
                    onChange={(e) => setEditData(prev => ({ ...prev, username: e.target.value }))}
                    className="text-3xl font-bold text-gray-900 bg-transparent border-b-2 border-purple-500 focus:outline-none"
                  />
                ) : (
                  <h1 className="text-3xl font-bold text-gray-900">{user.username}</h1>
                )}
                
                <div className="flex items-center space-x-2">
                  {user.isRecruiter ? (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                      项目招募者
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                      创意人才
                    </span>
                  )}
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
              </div>

              {isEditing ? (
                <textarea
                  value={editData.bio}
                  onChange={(e) => setEditData(prev => ({ ...prev, bio: e.target.value }))}
                  placeholder="介绍一下自己..."
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  rows={3}
                />
              ) : (
                <p className="text-gray-600 text-lg mb-4">{user.bio || '这个人很懒，什么都没有留下...'}</p>
              )}

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>北京</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>加入于 {user.createdAt.toLocaleDateString('zh-CN')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>4.8 评分</span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div>
              {isEditing ? (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>保存</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <X className="w-4 h-4" />
                    <span>取消</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>编辑资料</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">专业技能</h2>
                {isEditing && (
                  <button
                    onClick={() => setShowAddSkill(true)}
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1"
                  >
                    <Plus className="w-4 h-4" />
                    <span>添加技能</span>
                  </button>
                )}
              </div>

              {/* Add Skill Input */}
              {showAddSkill && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="输入新技能..."
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                    />
                    <button
                      onClick={handleAddSkill}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      添加
                    </button>
                    <button
                      onClick={() => {
                        setShowAddSkill(false)
                        setNewSkill('')
                      }}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors"
                    >
                      取消
                    </button>
                  </div>
                </div>
              )}

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {(isEditing ? editData.skills : user.skills).map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full"
                  >
                    <span className="font-medium">{skill}</span>
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-purple-500 hover:text-purple-700 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {user.skills.length === 0 && !isEditing && (
                <p className="text-gray-500 text-center py-8">暂无技能标签</p>
              )}
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">工作经验</h2>
              
              {isEditing ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    经验年限
                  </label>
                  <input
                    type="text"
                    value={editData.experience}
                    onChange={(e) => setEditData(prev => ({ ...prev, experience: e.target.value }))}
                    placeholder="例如：5年"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">当前经验</h3>
                    <p className="text-gray-600">{user.experience}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">数据统计</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">完成项目</span>
                  <span className="font-semibold text-gray-900">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">获得评价</span>
                  <span className="font-semibold text-gray-900">18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">平均评分</span>
                  <span className="font-semibold text-gray-900">4.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">响应时间</span>
                  <span className="font-semibold text-gray-900">2小时</span>
                </div>
              </div>
            </div>

            {/* Portfolio Preview */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">作品集</h3>
              <div className="space-y-3">
                {user.portfolio.slice(0, 3).map((item, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
                {user.portfolio.length === 0 && (
                  <p className="text-gray-500 text-center py-4">暂无作品</p>
                )}
                <button className="w-full text-purple-600 hover:text-purple-700 font-medium py-2">
                  查看全部作品
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
