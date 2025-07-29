import { create } from 'zustand'

import type { TasksState, TasksView } from '@/apps/common/types'
import { tasks as initialTasks } from '@/data/dummy-tasks-data'
import type { Task } from '@/types'

export const useTasksStore = create<TasksState>((set) => ({
  tasks: [...initialTasks],
  setTasks: (arg: Task[] | ((tasks: Task[]) => Task[])) => {
    set((state) => {
      return {
        tasks: typeof arg === 'function' ? arg(state.tasks) : arg,
      }
    })
  },
  currentView: 'list',
  setCurrentView: (newView: TasksView) => set({ currentView: newView }),
  currentFilter: '',
  setCurrentFilter: (newFilter: string) => set({ currentFilter: newFilter }),
}))
