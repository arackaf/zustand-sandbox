import { TasksCondensed } from '@/apps/common/components/TasksCondensed'
import { TasksDetailed } from '@/apps/common/components/TasksDetailed'
import { TasksList } from '@/apps/common/components/TasksList'
import { useCurrentFilter, useCurrentView, useTasks } from '@/apps/zustand-hooks/store/tasks'

export const TasksBody = () => {
  console.log('Rendering TasksBody')

  const currentFilter = useCurrentFilter()
  const currentView = useCurrentView()
  const tasks = useTasks()

  const filteredTasks = currentFilter
    ? tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(currentFilter.toLowerCase()) ||
          task.description.toLowerCase().includes(currentFilter.toLowerCase()),
      )
    : tasks

  return (
    <div className="flex gap-1">
      {currentView === 'list' && <TasksList tasks={filteredTasks} />}
      {currentView === 'detailed' && <TasksDetailed tasks={filteredTasks} />}
      {currentView === 'condensed' && <TasksCondensed tasks={filteredTasks} />}
    </div>
  )
}
