export const APP_CONFIG = {
  name: '创合矩阵',
  englishName: 'Quantum Echo',
  tagline: '量子共振，质效跃升',
  description: '以任务为导向的临时团队组建平台，连接创意人才，打造高效协作生态',
  version: '1.0.0',
  author: 'Quantum Echo Team'
}

export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh'
  },
  users: {
    profile: '/api/users/profile',
    update: '/api/users/update',
    search: '/api/users/search'
  },
  talent: {
    list: '/api/talent',
    profile: '/api/talent/:id',
    create: '/api/talent',
    update: '/api/talent/:id'
  },
  projects: {
    list: '/api/projects',
    create: '/api/projects',
    update: '/api/projects/:id',
    delete: '/api/projects/:id'
  },
  messages: {
    list: '/api/messages',
    send: '/api/messages',
    groups: '/api/messages/groups'
  }
}

export const STORAGE_KEYS = {
  user: 'quantum_echo_user',
  token: 'quantum_echo_token',
  theme: 'quantum_echo_theme',
  language: 'quantum_echo_language'
}

export const VALIDATION_RULES = {
  username: {
    minLength: 2,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    minLength: 6,
    maxLength: 50
  }
}

export const NOTIFICATION_TYPES = {
  RECRUITMENT: 'recruitment',
  MESSAGE: 'message',
  PROJECT_UPDATE: 'project_update',
  SYSTEM: 'system'
} as const

export const USER_TYPES = {
  TALENT: 'talent',
  RECRUITER: 'recruiter'
} as const

export const PROJECT_STATUS = {
  PLANNING: 'planning',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
} as const

export const AVAILABILITY_STATUS = {
  AVAILABLE: 'available',
  BUSY: 'busy',
  UNAVAILABLE: 'unavailable'
} as const
