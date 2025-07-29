import { useTasksContext } from '@/apps/vanilla/hooks/useTaskContext'

export const TasksCount = () => {
  console.log('Rendering TasksCount')

  const { tasks } = useTasksContext()

  return <div className="text-lg font-medium text-gray-600">Total Tasks: {tasks.length}</div>
}
