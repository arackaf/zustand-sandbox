import { useShallow } from 'zustand/react/shallow'

import { useTasksStore } from '@/apps/zustand-optimized/store/tasks'

export const AddNewTask = () => {
  console.log('Rendering AddNewTask')

  const [tasks, setTasks] = useTasksStore(useShallow((state) => [state.tasks, state.setTasks]))

  // const { tasks, setTasks } = useTasksStore(
  //   useShallow(state => ({
  //     tasks: state.tasks,
  //     setTasks: state.setTasks,
  //   }))
  // );

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
