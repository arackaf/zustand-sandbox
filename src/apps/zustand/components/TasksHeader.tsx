import { allViews } from '@/apps/common/constants'
import { useTasksStore } from '@/apps/zustand/store/tasks'
import { cn } from '@/utils'

export const TasksHeader = () => {
  console.log('Rendering TasksHeader')

  const { currentView, setCurrentView } = useTasksStore()

  return (
    <div className="flex gap-1">
      {allViews.map((view) => (
        <button
          key={view}
          onClick={() => setCurrentView(view)}
          className={cn('rounded-md bg-gray-200 p-1', { 'bg-gray-400': view === currentView })}
          disabled={view === currentView}
        >
          {view}
        </button>
      ))}
    </div>
  )
}
