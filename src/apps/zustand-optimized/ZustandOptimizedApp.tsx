import { AddNewTask } from '@/apps/zustand-optimized/components/AddNewTask'
import { TasksBody } from '@/apps/zustand-optimized/components/TasksBody'
import { TasksCount } from '@/apps/zustand-optimized/components/TasksCount'
import { TasksFilter } from '@/apps/zustand-optimized/components/TasksFilter'
import { TasksHeader } from '@/apps/zustand-optimized/components/TasksHeader'

const ZustandOptimizedLabel = () => {
  console.log('Rendering Zustand Optimized Label')
  return <span>Zustand Optimized</span>
}

export const ZustandOptimizedApp = () => {
  console.log('Rendering App')

  return (
    <div className="m-5 flex flex-col gap-2 p-5">
      <ZustandOptimizedLabel />
      <AddNewTask />
      <TasksCount />
      <TasksHeader />
      <TasksFilter />
      <TasksBody />
    </div>
  )
}
