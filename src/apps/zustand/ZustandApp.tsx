import { AddNewTask } from '@/apps/zustand/components/AddNewTask'
import { TasksBody } from '@/apps/zustand/components/TasksBody'
import { TasksCount } from '@/apps/zustand/components/TasksCount'
import { TasksFilter } from '@/apps/zustand/components/TasksFilter'
import { TasksHeader } from '@/apps/zustand/components/TasksHeader'

const ZustandLabel = () => {
  console.log('Rendering ZustandLabel')
  return <span>Zustand</span>
}

export const ZustandApp = () => {
  console.log('Rendering App')

  return (
    <div className="m-5 flex flex-col gap-2 p-5">
      <ZustandLabel />
      <AddNewTask />
      <TasksCount />
      <TasksHeader />
      <TasksFilter />
      <TasksBody />
    </div>
  )
}
