import { useTasksStore } from '@/apps/zustand/store/tasks'

export const AddNewTask = () => {
  console.log('Rendering AddNewTask')

  const { setTasks } = useTasksStore()

  return (
    <div>
      <button
        className="rounded-md bg-blue-500 p-2 text-white"
        onClick={() =>
          setTasks((tasks) =>
            tasks.concat({
              id: `${tasks.length + 1}`,
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
