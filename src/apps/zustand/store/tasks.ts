import { create } from 'zustand'

import type { TasksState, TasksView } from '@/apps/zustand/types'
import { tasks } from '@/data/dummy-tasks-data'
import type { Task } from '@/types'

export const useTasksStore = create<TasksState>((set) => ({
  tasks,
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
