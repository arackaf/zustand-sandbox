import { useTasksStore } from '@/apps/zustand/store/tasks'

export const TasksCount = () => {
  console.log('Rendering TasksCount')

  const { tasks } = useTasksStore()

  return <div className="text-lg font-medium text-gray-600">Total Tasks: {tasks.length}</div>
}
