import { createContext } from 'react'

import type { TasksState } from '@/apps/vanilla/types'

export const TasksContext = createContext<TasksState>(null as unknown as TasksState)
