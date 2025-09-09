import { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'film-tv',
    name: '戏剧影视',
    description: '电影、电视剧、纪录片等影视制作相关',
    icon: '🎬',
    subcategories: [
      { id: 'live-action', name: '真人', description: '真人影视制作', parentId: 'film-tv' },
      { id: 'animation', name: '动画', description: '动画影视制作', parentId: 'film-tv' },
      { id: 'acting', name: '表演', description: '演员表演', parentId: 'film-tv' },
      { id: 'directing', name: '导演', description: '影视导演', parentId: 'film-tv' },
      { id: 'screenwriting', name: '编剧', description: '剧本创作', parentId: 'film-tv' },
      { id: 'cinematography', name: '拍摄', description: '摄影摄像', parentId: 'film-tv' },
      { id: 'editing', name: '剪辑', description: '后期剪辑', parentId: 'film-tv' },
      { id: 'voice-acting', name: '配音', description: '配音演员', parentId: 'film-tv' },
      { id: 'music-composition', name: '配乐', description: '音乐创作', parentId: 'film-tv' },
      { id: 'color-grading', name: '调色', description: '色彩调色', parentId: 'film-tv' },
      { id: 'vfx', name: 'AE特效渲染制作', description: '视觉特效', parentId: 'film-tv' },
      { id: 'blender', name: 'Blender制作', description: '3D建模动画', parentId: 'film-tv' },
      { id: 'promotion', name: '宣传', description: '影视宣传推广', parentId: 'film-tv' }
    ]
  },
  {
    id: 'music',
    name: '音乐与制作',
    description: '音乐创作、制作、表演等相关',
    icon: '🎵',
    subcategories: [
      { id: 'vocal', name: '声乐', description: '歌唱表演', parentId: 'music' },
      { id: 'band-recruitment', name: '乐队招募', description: '乐队成员招募', parentId: 'music' },
      { id: 'composition', name: '作曲', description: '音乐创作', parentId: 'music' },
      { id: 'arrangement', name: '编曲', description: '音乐编曲', parentId: 'music' },
      { id: 'recording', name: '录音', description: '录音工程', parentId: 'music' },
      { id: 'mixing', name: '混音', description: '音频混音', parentId: 'music' },
      { id: 'mastering', name: '母带处理', description: '音频母带', parentId: 'music' },
      { id: 'sound-design', name: '音效设计', description: '音效制作', parentId: 'music' },
      { id: 'music-production', name: '音乐制作人', description: '音乐制作', parentId: 'music' },
      { id: 'instrumental', name: '器乐演奏', description: '乐器演奏', parentId: 'music' }
    ]
  },
  {
    id: 'design',
    name: '视觉设计',
    description: '平面设计、UI/UX、插画等',
    icon: '🎨',
    subcategories: [
      { id: 'graphic-design', name: '平面设计', description: '平面视觉设计', parentId: 'design' },
      { id: 'ui-ux', name: 'UI/UX设计', description: '用户界面设计', parentId: 'design' },
      { id: 'illustration', name: '插画', description: '插画创作', parentId: 'design' },
      { id: 'photography', name: '摄影', description: '摄影服务', parentId: 'design' },
      { id: 'branding', name: '品牌设计', description: '品牌视觉设计', parentId: 'design' },
      { id: 'web-design', name: '网页设计', description: '网站设计', parentId: 'design' },
      { id: 'motion-graphics', name: '动态设计', description: '动态图形设计', parentId: 'design' }
    ]
  },
  {
    id: 'writing',
    name: '写作创作',
    description: '文案写作、内容创作等',
    icon: '✍️',
    subcategories: [
      { id: 'copywriting', name: '文案写作', description: '广告文案', parentId: 'writing' },
      { id: 'content-creation', name: '内容创作', description: '内容制作', parentId: 'writing' },
      { id: 'translation', name: '翻译', description: '语言翻译', parentId: 'writing' },
      { id: 'editing', name: '编辑', description: '文字编辑', parentId: 'writing' },
      { id: 'creative-writing', name: '创意写作', description: '创意文案', parentId: 'writing' },
      { id: 'technical-writing', name: '技术写作', description: '技术文档', parentId: 'writing' }
    ]
  },
  {
    id: 'technology',
    name: '技术开发',
    description: '软件开发、技术实现等',
    icon: '💻',
    subcategories: [
      { id: 'frontend', name: '前端开发', description: '前端技术', parentId: 'technology' },
      { id: 'backend', name: '后端开发', description: '后端技术', parentId: 'technology' },
      { id: 'fullstack', name: '全栈开发', description: '全栈技术', parentId: 'technology' },
      { id: 'mobile', name: '移动开发', description: '移动应用', parentId: 'technology' },
      { id: 'game-dev', name: '游戏开发', description: '游戏制作', parentId: 'technology' },
      { id: 'ai-ml', name: 'AI/机器学习', description: '人工智能', parentId: 'technology' },
      { id: 'blockchain', name: '区块链', description: '区块链技术', parentId: 'technology' }
    ]
  },
  {
    id: 'marketing',
    name: '市场营销',
    description: '营销推广、品牌策划等',
    icon: '📈',
    subcategories: [
      { id: 'digital-marketing', name: '数字营销', description: '数字营销', parentId: 'marketing' },
      { id: 'social-media', name: '社交媒体', description: '社媒运营', parentId: 'marketing' },
      { id: 'brand-strategy', name: '品牌策略', description: '品牌策划', parentId: 'marketing' },
      { id: 'pr', name: '公关', description: '公共关系', parentId: 'marketing' },
      { id: 'event-planning', name: '活动策划', description: '活动组织', parentId: 'marketing' },
      { id: 'influencer', name: '网红营销', description: 'KOL合作', parentId: 'marketing' }
    ]
  }
]
