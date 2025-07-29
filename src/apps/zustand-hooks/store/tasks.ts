import { create } from 'zustand'

import type { TasksView } from '@/apps/common/types'
import { tasks as initialTasks } from '@/data/dummy-tasks-data'
import type { Task } from '@/types'

export type TasksStore = {
  currentFilter: string
  currentView: TasksView
  tasks: Task[]
  actions: {
    setCurrentFilter: (newFilter: string) => void
    setCurrentView: (tasksView: TasksView) => void
    setTasks: (tasks: Task[] | ((tasks: Task[]) => Task[])) => void
  }
}

export const useTasksStore = create<TasksStore>((set) => ({
  currentFilter: '',
  currentView: 'list',
  tasks: [...initialTasks],
  actions: {
    setTasks: (arg: Task[] | ((tasks: Task[]) => Task[])) => {
      set((state) => {
        return {
          tasks: typeof arg === 'function' ? arg(state.tasks) : arg,
        }
      })
    },
    setCurrentView: (newView: TasksView) => set({ currentView: newView }),
    setCurrentFilter: (newFilter: string) => set({ currentFilter: newFilter }),
  },
}))

export const useTasks = () => {
  return useTasksStore((state) => state.tasks)
}

export const useTasksCount = () => {
  return useTasksStore((state) => state.tasks.length)
}

export const useCurrentView = () => {
  return useTasksStore((state) => state.currentView)
}

export const useCurrentFilter = () => {
  return useTasksStore((state) => state.currentFilter)
}

export const useActions = () => {
  return useTasksStore((state) => state.actions)
}
