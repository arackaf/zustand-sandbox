import { TasksCondensed } from '@/apps/common/components/TasksCondensed'
import { TasksDetailed } from '@/apps/common/components/TasksDetailed'
import { TasksList } from '@/apps/common/components/TasksList'
import { useTasksStore } from '@/apps/zustand-optimized/store/tasks'

export const TasksBody = () => {
  console.log('Rendering TasksBody')

  const currentView = useTasksStore((state) => state.currentView)
  const tasks = useTasksStore((state) => state.tasks)
  const currentFilter = useTasksStore((state) => state.currentFilter)

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
