import { useTasksStoreOptimized } from '@/apps/zustand-optimized/store/tasks'

export const TasksCount = () => {
  console.log('Rendering TasksCount')

  const tasksCount = useTasksStoreOptimized((state) => state.tasks.length)

  return <div className="text-lg font-medium text-gray-600">Total Tasks: {tasksCount}</div>
}
