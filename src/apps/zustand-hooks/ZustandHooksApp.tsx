import { AddNewTask } from '@/apps/zustand-hooks/components/AddNewTask'
import { TasksBody } from '@/apps/zustand-hooks/components/TasksBody'
import { TasksCount } from '@/apps/zustand-hooks/components/TasksCount'
import { TasksFilter } from '@/apps/zustand-hooks/components/TasksFilter'
import { TasksHeader } from '@/apps/zustand-hooks/components/TasksHeader'

const ZustandHooksLabel = () => {
  console.log('Rendering Zustand Hooks Label')
  return <span>Zustand Hooks</span>
}

export const ZustandHooksApp = () => {
  console.log('Rendering App')

  return (
    <div className="m-5 flex flex-col gap-2 p-5">
      <ZustandHooksLabel />
      <AddNewTask />
      <TasksCount />
      <TasksHeader />
      <TasksFilter />
      <TasksBody />
    </div>
  )
}
