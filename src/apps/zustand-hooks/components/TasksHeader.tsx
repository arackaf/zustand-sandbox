import { allViews } from '@/apps/common/constants'
import { useActions, useCurrentView } from '@/apps/zustand-hooks/store/tasks'
import { cn } from '@/utils'

export const TasksHeader = () => {
  console.log('Rendering TasksHeader')

  const currentView = useCurrentView()
  const { setCurrentView } = useActions()

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
