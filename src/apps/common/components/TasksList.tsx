import type { TasksListProps } from '@/apps/common/types'

export const TasksList = ({ tasks }: TasksListProps) => {
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
