import { useTasksStore } from '@/apps/zustand/store/tasks'
import type { Task } from '@/types'
import { cn } from '@/utils'

interface TasksListProps {
  tasks: Task[]
}

export const TasksBody = () => {
  console.log('Rendering TasksBody')

  const { currentView, tasks, currentFilter } = useTasksStore()

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

const TasksList = ({ tasks }: TasksListProps) => {
  console.log('Rendering TasksList')

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2 text-left">Title</th>
          <th className="border p-2 text-left">Description</th>
          <th className="border p-2 text-left">User</th>
          <th className="border p-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td className="border p-2">{task.title}</td>
            <td className="border p-2">{task.description}</td>
            <td className="border p-2">{task.user}</td>
            <td className="border p-2">{task.completed ? 'Completed' : 'Pending'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const TasksCondensed = ({ tasks }: TasksListProps) => {
  console.log('Rendering TasksCondensed')

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <div key={task.id} className="flex flex-col gap-2 rounded border p-2">
          <div className="font-bold">{task.title}</div>
          <div className="text-sm text-gray-600">{task.user}</div>
          <div className="text-sm">{task.completed ? '✓ Done' : '○ Pending'}</div>
        </div>
      ))}
    </div>
  )
}

const TasksDetailed = ({ tasks }: TasksListProps) => {
  console.log('Rendering TasksDetailed')

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex flex-col gap-3 rounded-lg border p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{task.title}</h3>
            <span
              className={cn(
                'rounded-full px-3 py-1 text-sm',
                task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800',
              )}
            >
              {task.completed ? 'Completed' : 'In Progress'}
            </span>
          </div>
          <p className="text-gray-700">{task.description}</p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Assigned to: {task.user}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
