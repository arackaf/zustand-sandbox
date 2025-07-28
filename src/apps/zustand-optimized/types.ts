import type { Task } from '@/types'

export type TasksView = 'list' | 'detailed' | 'condensed'

export type TasksState = {
  tasks: Task[]
  setTasks: (tasks: Task[] | ((tasks: Task[]) => Task[])) => void
  currentView: TasksView
  setCurrentView: (tasksView: TasksView) => void
  currentFilter: string
  setCurrentFilter: (newFilter: string) => void
}
