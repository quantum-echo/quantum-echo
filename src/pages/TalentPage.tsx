import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter, MessageCircle, UserCheck, Star, MapPin, Clock, Award, Play, Image as ImageIcon, FileText } from 'lucide-react'
import { categories } from '../data/categories'
import { talentsByCategory } from '../data/mockTalents'
import { TalentProfile, User } from '../types'
import { useAuth } from '../contexts/AuthContext'
import { useChat } from '../contexts/ChatContext'

const TalentPage: React.FC = () => {
  const { category } = useParams<{ category: string }>()
  const { user } = useAuth()
  const { createGroup } = useChat()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [talentProfiles, setTalentProfiles] = useState<TalentProfile[]>([])
  const [showRecruitModal, setShowRecruitModal] = useState(false)
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null)
  const [groupName, setGroupName] = useState('')

  const currentCategory = categories.find(cat => cat.id === category)

  // 加载对应分类的人才数据
  useEffect(() => {
    if (category && talentsByCategory[category as keyof typeof talentsByCategory]) {
      setTalentProfiles(talentsByCategory[category as keyof typeof talentsByCategory])
    } else {
      setTalentProfiles([])
    }
  }, [category])

  const filteredTalent = talentProfiles.filter(profile => {
    const matchesSearch = profile.user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesSubcategories = selectedSubcategories.length === 0 || 
                                selectedSubcategories.some(sub => profile.subcategoryIds.includes(sub))
    return matchesSearch && matchesSubcategories
  })

  const handleRecruit = (talent: TalentProfile) => {
    setSelectedTalent(talent)
    setShowRecruitModal(true)
  }

  const handleMessage = (talent: TalentProfile) => {
    // 模拟私信功能 - 实际应用中会打开聊天界面
    alert(`正在与 ${talent.user.username} 建立私信连接...`)
  }

  const handleCreateGroup = () => {
    if (selectedTalent && groupName) {
      const group = createGroup(groupName, `与 ${selectedTalent.user.username} 的项目合作`)
      setShowRecruitModal(false)
      setGroupName('')
      setSelectedTalent(null)
      // 这里应该发送通知给被招募者
    }
  }

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">页面未找到</h1>
          <Link to="/categories" className="text-purple-600 hover:text-purple-700">
            返回专业专区
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/categories" className="text-purple-600 hover:text-purple-700">
              专业专区
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{currentCategory.name}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            {currentCategory.name} 人才库
          </h1>
          <p className="text-xl text-gray-600">{currentCategory.description}</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="搜索人才..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Subcategory Filters */}
            <div className="flex flex-wrap gap-2">
              {currentCategory.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => {
                    setSelectedSubcategories(prev => 
                      prev.includes(sub.id) 
                        ? prev.filter(id => id !== sub.id)
                        : [...prev, sub.id]
                    )
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSubcategories.includes(sub.id)
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Talent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalent.map((talent, index) => (
            <motion.div
              key={talent.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Talent Header */}
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={talent.user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'}
                    alt={talent.user.username}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{talent.user.username}</h3>
                      {talent.isVerified && (
                        <Award className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{talent.user.bio}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{talent.rating}</span>
                        <span>({talent.reviewCount})</span>
                      </div>
                      {talent.location && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{talent.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {talent.subcategoryIds.map((subId) => {
                      const subcategory = currentCategory.subcategories.find(sub => sub.id === subId)
                      return subcategory ? (
                        <span
                          key={subId}
                          className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                        >
                          {subcategory.name}
                        </span>
                      ) : null
                    })}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {talent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gender and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{talent.gender}</span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{talent.rating}</span>
                      <span className="text-sm text-gray-500">({talent.reviewCount})</span>
                    </div>
                  </div>
                </div>

                {/* Portfolio Preview */}
                {talent.user.portfolio.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">代表作品</h4>
                    <div className="space-y-2">
                      {talent.user.portfolio.slice(0, 2).map((item, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <h5 className="text-sm font-medium text-gray-900 mb-1">{item.title}</h5>
                          <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
                          {/* 真实人才可以上传图片和视频 */}
                          {item.type === 'image' && item.content && (
                            <div className="mt-2">
                              <img 
                                src={item.content} 
                                alt={item.title}
                                className="w-full h-24 object-cover rounded"
                              />
                            </div>
                          )}
                          {item.type === 'video' && item.content && (
                            <div className="mt-2">
                              <video 
                                src={item.content}
                                className="w-full h-24 object-cover rounded"
                                controls
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {talent.user.portfolio.length > 2 && (
                      <p className="text-xs text-gray-500 mt-2">
                        +{talent.user.portfolio.length - 2} 更多作品
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleMessage(talent)}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>私信</span>
                  </button>
                  <button
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 cursor-default"
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>已招募</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTalent.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到匹配的人才</h3>
            <p className="text-gray-600">尝试调整搜索条件或筛选器</p>
          </motion.div>
        )}
      </div>

      {/* Recruit Modal */}
      {showRecruitModal && selectedTalent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">招募 {selectedTalent.user.username}</h3>
            <p className="text-gray-600 mb-6">
              为您的项目创建一个群聊，开始与这位人才的合作。
            </p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                群聊名称
              </label>
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="例如：微电影项目合作"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowRecruitModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-medium transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleCreateGroup}
                disabled={!groupName.trim()}
                className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white py-3 rounded-lg font-medium transition-colors"
              >
                创建群聊
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default TalentPage
