import type { TasksListProps } from '@/apps/common/types'

export const TasksCondensed = ({ tasks }: TasksListProps) => {
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
