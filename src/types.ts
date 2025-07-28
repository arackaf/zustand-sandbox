export type Task = {
  id: string
  title: string
  description: string
  completed: boolean
  user: string
}

export type AppType = 'zustand' | 'vanilla' | 'zustand-optimized'
