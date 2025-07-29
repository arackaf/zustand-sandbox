import type { ReactNode } from 'react'
import { useState } from 'react'

import type { TasksState, TasksView } from '@/apps/common/types'
import { TasksContext } from '@/apps/vanilla/context/TasksContext'
import { tasks as initialTasks } from '@/data/dummy-tasks-data'
import type { Task } from '@/types'

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  console.log('Rendering TasksProvider')

  const [tasks, setTasks] = useState<Task[]>([...initialTasks])
  const [currentView, setCurrentView] = useState<TasksView>('list')
  const [currentFilter, setCurrentFilter] = useState<string>('')

  const value: TasksState = {
    tasks,
    setTasks,
    currentView,
    setCurrentView,
    currentFilter,
    setCurrentFilter,
  }

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
