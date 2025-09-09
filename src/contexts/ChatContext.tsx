import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Message, ChatGroup } from '../types'

interface ChatContextType {
  messages: Message[]
  groups: ChatGroup[]
  activeGroup: ChatGroup | null
  sendMessage: (content: string, groupId?: string, receiverId?: string) => void
  createGroup: (name: string, description?: string, projectId?: string) => ChatGroup
  joinGroup: (groupId: string) => void
  setActiveGroup: (group: ChatGroup | null) => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const useChat = () => {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}

interface ChatProviderProps {
  children: ReactNode
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [groups, setGroups] = useState<ChatGroup[]>([])
  const [activeGroup, setActiveGroup] = useState<ChatGroup | null>(null)

  const sendMessage = (content: string, groupId?: string, receiverId?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'current_user', // 实际应用中从auth context获取
      receiverId,
      groupId,
      content,
      type: 'text',
      timestamp: new Date(),
      isRead: false
    }

    setMessages(prev => [...prev, newMessage])
  }

  const createGroup = (name: string, description?: string, projectId?: string): ChatGroup => {
    const newGroup: ChatGroup = {
      id: Date.now().toString(),
      name,
      description,
      creatorId: 'current_user', // 实际应用中从auth context获取
      members: ['current_user'],
      projectId,
      createdAt: new Date()
    }

    setGroups(prev => [...prev, newGroup])
    return newGroup
  }

  const joinGroup = (groupId: string) => {
    setGroups(prev => 
      prev.map(group => 
        group.id === groupId 
          ? { ...group, members: [...group.members, 'current_user'] }
          : group
      )
    )
  }

  const value: ChatContextType = {
    messages,
    groups,
    activeGroup,
    sendMessage,
    createGroup,
    joinGroup,
    setActiveGroup
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}
