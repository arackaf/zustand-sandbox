import { useTasksCount } from '@/apps/zustand-hooks/store/tasks'

export const TasksCount = () => {
  console.log('Rendering TasksCount')

  const tasksCount = useTasksCount()

  return <div className="text-lg font-medium text-gray-600">Total Tasks: {tasksCount}</div>
}
