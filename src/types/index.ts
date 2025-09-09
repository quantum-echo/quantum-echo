export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  bio?: string
  skills: string[]
  experience: string
  portfolio: PortfolioItem[]
  isRecruiter: boolean
  createdAt: Date
}

export interface PortfolioItem {
  id: string
  type: 'text' | 'image' | 'video'
  title: string
  description: string
  content: string
  thumbnail?: string
  createdAt: Date
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  description: string
  parentId: string
}

export interface TalentProfile {
  id: string
  userId: string
  user: User
  categoryId: string
  subcategoryIds: string[]
  tags: string[]
  hourlyRate?: number
  availability: 'available' | 'busy' | 'unavailable'
  location?: string
  languages: string[]
  rating: number
  reviewCount: number
  isVerified: boolean
  gender?: '男' | '女'
}

export interface Message {
  id: string
  senderId: string
  receiverId?: string
  groupId?: string
  content: string
  type: 'text' | 'image' | 'file'
  timestamp: Date
  isRead: boolean
}

export interface ChatGroup {
  id: string
  name: string
  description?: string
  creatorId: string
  members: string[]
  projectId?: string
  createdAt: Date
  lastMessage?: Message
}

export interface Project {
  id: string
  title: string
  description: string
  categoryId: string
  subcategoryIds: string[]
  creatorId: string
  teamMembers: string[]
  status: 'planning' | 'active' | 'completed' | 'cancelled'
  budget?: number
  deadline?: Date
  createdAt: Date
  updatedAt: Date
}

export interface Notification {
  id: string
  userId: string
  type: 'recruitment' | 'message' | 'project_update' | 'system'
  title: string
  message: string
  isRead: boolean
  actionUrl?: string
  createdAt: Date
}
