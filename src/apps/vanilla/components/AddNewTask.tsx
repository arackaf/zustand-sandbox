import { useTasksContext } from '@/apps/vanilla/hooks/useTaskContext'

export const AddNewTask = () => {
  console.log('Rendering AddNewTask')

  const { setTasks } = useTasksContext()

  return (
    <div>
      <button
        className="rounded-md bg-blue-500 p-2 text-white"
        onClick={() =>
          setTasks((prevTasks) =>
            prevTasks.concat({
              id: `${prevTasks.length + 1}`,
              title: 'New Task',
              user: 'John Doe',
              completed: false,
              description: 'New Task',
            }),
          )
        }
      >
        Add New Task
      </button>
    </div>
  )
}
