import { useActions, useTasks } from '@/apps/zustand-hooks/store/tasks'

export const AddNewTask = () => {
  console.log('Rendering AddNewTask')

  const tasks = useTasks()
  const { setTasks } = useActions()

  return (
    <div>
      <button
        className="rounded-md bg-blue-500 p-2 text-white"
        onClick={() =>
          setTasks(
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
