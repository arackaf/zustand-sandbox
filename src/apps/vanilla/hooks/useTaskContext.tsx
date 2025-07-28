import { useContext } from 'react'

import { TasksContext } from '@/apps/vanilla/context/TasksContext'

export const useTasksContext = () => useContext(TasksContext)
