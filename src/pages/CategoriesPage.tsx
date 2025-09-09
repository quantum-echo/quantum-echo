import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, Music, Palette, PenTool, Code, TrendingUp, ArrowRight } from 'lucide-react'
import { categories } from '../data/categories'

const CategoriesPage: React.FC = () => {
  const iconMap = {
    '🎬': Play,
    '🎵': Music,
    '🎨': Palette,
    '✍️': PenTool,
    '💻': Code,
    '📈': TrendingUp
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display">
            专业专区
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索各个创意领域，找到最专业的人才和项目机会
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Play
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={`/talent/${category.id}`}
                  className="block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-500">{category.subcategories.length} 个专业方向</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Subcategories Preview */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">主要专业方向：</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.slice(0, 6).map((sub) => (
                          <span
                            key={sub.id}
                            className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full hover:bg-green-200 transition-colors"
                          >
                            {sub.name}
                          </span>
                        ))}
                        {category.subcategories.length > 6 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                            +{category.subcategories.length - 6} 更多
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Category Footer */}
                  <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        查看 {category.subcategories.length} 个专业方向
                      </span>
                      <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">平台数据</h2>
            <p className="text-gray-600">实时更新的平台活跃数据</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: '注册用户', value: '10,000+', color: 'text-purple-600' },
              { label: '活跃项目', value: '2,500+', color: 'text-blue-600' },
              { label: '成功合作', value: '8,000+', color: 'text-green-600' },
              { label: '专业领域', value: '6', color: 'text-orange-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CategoriesPage
