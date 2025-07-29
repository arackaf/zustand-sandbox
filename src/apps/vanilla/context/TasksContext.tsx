import { createContext } from 'react'

import type { TasksState } from '@/apps/common/types'

export const TasksContext = createContext<TasksState>(null as unknown as TasksState)
