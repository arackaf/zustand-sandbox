import { AddNewTask } from '@/apps/vanilla/components/AddNewTask'
import { TasksBody } from '@/apps/vanilla/components/TasksBody'
import { TasksCount } from '@/apps/vanilla/components/TasksCount'
import { TasksFilter } from '@/apps/vanilla/components/TasksFilter'
import { TasksHeader } from '@/apps/vanilla/components/TasksHeader'
import { TasksProvider } from '@/apps/vanilla/providers/TasksProvider'

const VanillaLabel = () => {
  console.log('Rendering VanillaLabel')
  return <span>Vanilla</span>
}

const App = () => {
  console.log('Rendering App')

  return (
    <div className="m-5 flex flex-col gap-2 p-5">
      <VanillaLabel />
      <AddNewTask />
      <TasksCount />
      <TasksHeader />
      <TasksFilter />
      <TasksBody />
    </div>
  )
}

export const VanillaApp = () => {
  console.log('Rendering AppWithContext')

  return (
    <TasksProvider>
      <App />
    </TasksProvider>
  )
}
