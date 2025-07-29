import { v7 } from 'uuid'

import type { Task } from '@/types'

export const tasks: Task[] = [
  {
    id: v7(),
    title: 'Query tune Postgres queries',
    description: 'Fix those slow postgres queries',
    completed: false,
    user: 'Adam',
  },
  { id: v7(), title: 'Add Redis', description: 'Add Redis caching layer', completed: false, user: 'Adam' },
  { id: v7(), title: 'Upgrade Vite', description: 'Upgrade to Vite 6', completed: true, user: 'Mark' },
  { id: v7(), title: 'Tailwind 4', description: 'Upgrade to Tailwind 4', completed: false, user: 'Mark' },
  {
    id: v7(),
    title: 'Update Java concurrency to use futures',
    description: 'Update async Java code to take full advantage of futures',
    completed: false,
    user: 'Adam',
  },
]
