import { TalentProfile, User, PortfolioItem } from '../types'

// 生成与技能相关的作品集数据（仅文本描述，无图片）
const generatePortfolio = (skills: string[], count: number = 3): PortfolioItem[] => {
  const portfolios: PortfolioItem[] = []
  
  // 根据技能类型生成相关作品描述（更真实的描述）
  const skillPortfolioMap: { [key: string]: { title: string, description: string } } = {
    '导演': {
      title: '微电影《追光者》',
      description: '2023年独立执导的12分钟微电影，讲述外卖小哥的温暖故事，在抖音获得200万播放，点赞超过15万'
    },
    '编剧': {
      title: '网剧剧本《青春不散场》',
      description: '为某视频平台创作的青春校园剧剧本，共24集，已签约制作，预计2024年上线'
    },
    '摄影': {
      title: '人像摄影作品集',
      description: '主要拍摄情侣写真和毕业照，在微博有3万粉丝，月接单量稳定在20-30单，客户好评率98%'
    },
    '摄像': {
      title: '婚礼跟拍作品',
      description: '专业婚礼摄像师，已拍摄超过200场婚礼，在朋友圈和抖音经常被转发，口碑很好'
    },
    '表演': {
      title: '话剧《小城故事》',
      description: '在本地小剧场参演的话剧，连演15场，场场爆满，观众反响热烈，被当地媒体报道'
    },
    '配音': {
      title: '有声书配音',
      description: '为某听书平台录制了3部有声小说，总时长超过100小时，听众评价声音很有感染力'
    },
    '作曲': {
      title: '原创歌曲《夜归人》',
      description: '自己作词作曲的民谣歌曲，在网易云音乐发布，目前播放量8万+，评论500多条'
    },
    '声乐': {
      title: '翻唱作品集',
      description: '在B站发布翻唱视频，粉丝1.2万，最火的视频播放量50万+，经常有粉丝催更'
    },
    'UI设计': {
      title: '小程序界面设计',
      description: '为本地商家设计的外卖小程序界面，用户反馈界面简洁易用，订单转化率提升了35%'
    },
    'UX设计': {
      title: 'APP用户体验优化',
      description: '为某教育类APP重新设计用户流程，用户留存率从30%提升到55%，获得公司年度最佳设计奖'
    },
    '平面设计': {
      title: '海报设计作品',
      description: '为各种活动设计海报，在朋友圈经常被转发，有固定的客户群体，月收入稳定'
    },
    '插画': {
      title: '手绘插画作品',
      description: '主要画水彩插画，在微博和小红书有2万粉丝，经常接商业插画订单，一幅画收费500-2000元'
    },
    '文案写作': {
      title: '公众号文案',
      description: '为某美食公众号写文案，平均阅读量从5000提升到2万+，粉丝增长明显，老板很满意'
    },
    '前端开发': {
      title: '个人博客网站',
      description: '用Vue.js开发的个人技术博客，在GitHub有800+star，经常分享前端技术文章，有一定影响力'
    },
    '后端开发': {
      title: 'API接口开发',
      description: '为某创业公司开发的后端系统，处理日活10万用户，系统运行稳定，老板很信任我的技术'
    },
    '数字营销': {
      title: '抖音运营案例',
      description: '帮某餐厅运营抖音账号，3个月从0粉丝涨到5万，视频平均播放量10万+，带动了线下客流'
    }
  }
  
  for (let i = 0; i < count; i++) {
    const skill = skills[i % skills.length]
    const portfolioData = skillPortfolioMap[skill] || {
      title: `${skill}作品${i + 1}`,
      description: `这是我创作的${skill}作品，展现了我在这个领域的专业技能。`
    }
    
    portfolios.push({
      id: `${skill}-${i}`,
      type: 'text',
      title: portfolioData.title,
      description: portfolioData.description,
      content: portfolioData.description,
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
    })
  }
  
  return portfolios
}

// 戏剧影视人才
const filmTvTalents: TalentProfile[] = [
  {
    id: 'film-1',
    userId: 'user-film-1',
    user: {
      id: 'user-film-1',
      username: '山行记',
      email: 'shanxing@example.com',
      avatar: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop&crop=center',
      bio: '资深影视导演，擅长剧情片和纪录片，有8年行业经验',
      skills: ['导演', '编剧', '剪辑'],
      experience: '8年',
      portfolio: generatePortfolio(['导演', '编剧', '剪辑'], 4),
      isRecruiter: false,
      createdAt: new Date('2020-03-15')
    },
    categoryId: 'film-tv',
    subcategoryIds: ['directing', 'screenwriting', 'editing'],
    tags: ['导演', '编剧', '剧情片', '纪录片', '微电影'],
    availability: 'available',
    location: '北京',
    languages: ['中文', '英文'],
    rating: 4.8,
    reviewCount: 24,
    isVerified: true,
    gender: '男'
  },
  {
    id: 'film-2',
    userId: 'user-film-2',
    user: {
      id: 'user-film-2',
      username: '夕月',
      email: 'xiyue@example.com',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=center',
      bio: '专业摄影师，擅长商业摄影和影视拍摄，作品多次获奖',
      skills: ['摄影', '摄像', '调色'],
      experience: '6年',
      portfolio: generatePortfolio(['摄影', '摄像', '调色'], 5),
      isRecruiter: false,
      createdAt: new Date('2021-01-20')
    },
    categoryId: 'film-tv',
    subcategoryIds: ['cinematography', 'color-grading'],
    tags: ['摄影', '摄像', '商业摄影', '调色', '航拍'],
    availability: 'available',
    location: '上海',
    languages: ['中文'],
    rating: 4.9,
    reviewCount: 18,
    isVerified: true,
    gender: '女'
  },
  {
    id: 'film-3',
    userId: 'user-film-3',
    user: {
      id: 'user-film-3',
      username: '布哒泥鳅',
      email: 'budaniqiu@example.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=center',
      bio: '专业演员，擅长情感戏和喜剧表演，有丰富的舞台和影视经验',
      skills: ['表演', '配音', '舞蹈'],
      experience: '5年',
      portfolio: generatePortfolio(['表演', '配音', '舞蹈'], 3),
      isRecruiter: false,
      createdAt: new Date('2021-06-10')
    },
    categoryId: 'film-tv',
    subcategoryIds: ['acting', 'voice-acting'],
    tags: ['表演', '配音', '情感戏', '喜剧', '舞台剧'],
    availability: 'available',
    location: '广州',
    languages: ['中文', '粤语'],
    rating: 4.7,
    reviewCount: 15,
    isVerified: true,
    gender: '女'
  }
]

// 音乐制作人才
const musicTalents: TalentProfile[] = [
  {
    id: 'music-1',
    userId: 'user-music-1',
    user: {
      id: 'user-music-1',
      username: '陈浩宇',
      email: 'chenhaoyu@example.com',
      avatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=100&h=100&fit=crop&crop=center',
      bio: '独立音乐制作人，擅长电子音乐和流行音乐制作，合作过众多知名艺人',
      skills: ['作曲', '编曲', '混音', '音乐制作'],
      experience: '7年',
      portfolio: generatePortfolio(['作曲', '编曲', '混音', '音乐制作'], 4),
      isRecruiter: false,
      createdAt: new Date('2019-09-05')
    },
    categoryId: 'music',
    subcategoryIds: ['composition', 'arrangement', 'mixing', 'music-production'],
    tags: ['电子音乐', '流行音乐', '作曲', '编曲', '混音'],
    availability: 'available',
    location: '深圳',
    languages: ['中文', '英文'],
    rating: 4.9,
    reviewCount: 32,
    isVerified: true,
    gender: '男'
  },
  {
    id: 'music-2',
    userId: 'user-music-2',
    user: {
      id: 'user-music-2',
      username: '奶芙糖',
      email: 'naifutang@example.com',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=center',
      bio: '专业歌手，擅长民谣和流行歌曲，声音清澈动人，有丰富的演出经验',
      skills: ['声乐', '吉他', '钢琴'],
      experience: '4年',
      portfolio: generatePortfolio(['声乐', '吉他', '钢琴'], 3),
      isRecruiter: false,
      createdAt: new Date('2020-11-12')
    },
    categoryId: 'music',
    subcategoryIds: ['vocal', 'instrumental'],
    tags: ['民谣', '流行', '声乐', '吉他', '钢琴'],
    availability: 'available',
    location: '成都',
    languages: ['中文', '英文'],
    rating: 4.8,
    reviewCount: 21,
    isVerified: true,
    gender: '女'
  }
]

// 视觉设计人才
const designTalents: TalentProfile[] = [
  {
    id: 'design-1',
    userId: 'user-design-1',
    user: {
      id: 'user-design-1',
      username: '林志远',
      email: 'linzhiyuan@example.com',
      avatar: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop&crop=center',
      bio: '资深UI/UX设计师，专注于移动应用和网页设计，作品简洁现代',
      skills: ['UI设计', 'UX设计', '平面设计', '插画'],
      experience: '6年',
      portfolio: generatePortfolio(['UI设计', 'UX设计', '平面设计', '插画'], 5),
      isRecruiter: false,
      createdAt: new Date('2020-02-28')
    },
    categoryId: 'design',
    subcategoryIds: ['ui-ux', 'graphic-design', 'illustration'],
    tags: ['UI设计', 'UX设计', '移动应用', '网页设计', '插画'],
    availability: 'available',
    location: '杭州',
    languages: ['中文', '英文'],
    rating: 4.8,
    reviewCount: 28,
    isVerified: true,
    gender: '男'
  },
  {
    id: 'design-2',
    userId: 'user-design-2',
    user: {
      id: 'user-design-2',
      username: '苏晓萌',
      email: 'suxiaomeng@example.com',
      avatar: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=100&h=100&fit=crop&crop=center',
      bio: '专业摄影师，擅长人像摄影和商业摄影，风格独特，深受客户喜爱',
      skills: ['人像摄影', '商业摄影', '后期修图', '视频拍摄'],
      experience: '5年',
      portfolio: generatePortfolio(['人像摄影', '商业摄影', '后期修图', '视频拍摄'], 4),
      isRecruiter: false,
      createdAt: new Date('2021-04-15')
    },
    categoryId: 'design',
    subcategoryIds: ['photography', 'graphic-design'],
    tags: ['人像摄影', '商业摄影', '后期修图', '视频拍摄', '时尚摄影'],
    availability: 'available',
    location: '南京',
    languages: ['中文'],
    rating: 4.9,
    reviewCount: 19,
    isVerified: true,
    gender: '女'
  }
]

// 写作创作人才
const writingTalents: TalentProfile[] = [
  {
    id: 'writing-1',
    userId: 'user-writing-1',
    user: {
      id: 'user-writing-1',
      username: '墨染青花',
      email: 'moranqinghua@example.com',
      avatar: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop&crop=center',
      bio: '资深文案策划师，擅长品牌文案和营销文案，文笔犀利，创意十足',
      skills: ['文案写作', '内容创作', '品牌策划', '营销策划'],
      experience: '7年',
      portfolio: generatePortfolio(['文案写作', '内容创作', '品牌策划', '营销策划'], 3),
      isRecruiter: false,
      createdAt: new Date('2019-08-20')
    },
    categoryId: 'writing',
    subcategoryIds: ['copywriting', 'content-creation', 'creative-writing'],
    tags: ['文案写作', '品牌策划', '营销文案', '内容创作', '创意写作'],
    availability: 'available',
    location: '北京',
    languages: ['中文', '英文'],
    rating: 4.7,
    reviewCount: 25,
    isVerified: true,
    gender: '女'
  }
]

// 技术开发人才
const techTalents: TalentProfile[] = [
  {
    id: 'tech-1',
    userId: 'user-tech-1',
    user: {
      id: 'user-tech-1',
      username: '代码诗人',
      email: 'codepoet@example.com',
      avatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=100&h=100&fit=crop&crop=center',
      bio: '全栈开发工程师，精通前后端技术，有丰富的项目经验和团队协作能力',
      skills: ['前端开发', '后端开发', '全栈开发', '移动开发'],
      experience: '8年',
      portfolio: generatePortfolio(['前端开发', '后端开发', '全栈开发', '移动开发'], 4),
      isRecruiter: false,
      createdAt: new Date('2018-12-10')
    },
    categoryId: 'technology',
    subcategoryIds: ['frontend', 'backend', 'fullstack', 'mobile'],
    tags: ['React', 'Node.js', 'Python', '移动开发', '全栈'],
    availability: 'available',
    location: '上海',
    languages: ['中文', '英文'],
    rating: 4.9,
    reviewCount: 35,
    isVerified: true,
    gender: '男'
  },
  {
    id: 'tech-2',
    userId: 'user-tech-2',
    user: {
      id: 'user-tech-2',
      username: '王思雨',
      email: 'wangsiyu@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      bio: '专业UI设计师，专注于用户体验设计，作品简洁美观，用户友好',
      skills: ['UI设计', 'UX设计', '前端开发', '原型设计'],
      experience: '5年',
      portfolio: generatePortfolio(['UI设计', 'UX设计', '前端开发', '原型设计'], 3),
      isRecruiter: false,
      createdAt: new Date('2020-07-18')
    },
    categoryId: 'technology',
    subcategoryIds: ['frontend', 'ui-ux'],
    tags: ['UI设计', 'UX设计', '前端开发', '原型设计', '用户研究'],
    availability: 'available',
    location: '深圳',
    languages: ['中文', '英文'],
    rating: 4.8,
    reviewCount: 22,
    isVerified: true,
    gender: '女'
  }
]

// 市场营销人才
const marketingTalents: TalentProfile[] = [
  {
    id: 'marketing-1',
    userId: 'user-marketing-1',
    user: {
      id: 'user-marketing-1',
      username: '张明轩',
      email: 'zhangmingxuan@example.com',
      avatar: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop&crop=center',
      bio: '资深营销策划师，擅长数字营销和品牌推广，有丰富的市场经验',
      skills: ['数字营销', '品牌策划', '社交媒体', '内容营销'],
      experience: '6年',
      portfolio: generatePortfolio(['数字营销', '品牌策划', '社交媒体', '内容营销'], 3),
      isRecruiter: false,
      createdAt: new Date('2020-01-15')
    },
    categoryId: 'marketing',
    subcategoryIds: ['digital-marketing', 'brand-strategy', 'social-media'],
    tags: ['数字营销', '品牌策划', '社交媒体', '内容营销', '数据分析'],
    availability: 'available',
    location: '北京',
    languages: ['中文', '英文'],
    rating: 4.8,
    reviewCount: 20,
    isVerified: true,
    gender: '男'
  }
]

// 按分类组织的人才数据
export const talentsByCategory = {
  'film-tv': filmTvTalents,
  'music': musicTalents,
  'design': designTalents,
  'writing': writingTalents,
  'technology': techTalents,
  'marketing': marketingTalents
}

// 所有人才数据
export const allTalents: TalentProfile[] = [
  ...filmTvTalents,
  ...musicTalents,
  ...designTalents,
  ...writingTalents,
  ...techTalents,
  ...marketingTalents
]
