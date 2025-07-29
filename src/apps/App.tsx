import { VanillaApp } from '@/apps/vanilla/VanillaApp'
import { ZustandOptimizedApp } from '@/apps/zustand-optimized/ZustandOptimizedApp'
import { ZustandApp } from '@/apps/zustand/ZustandApp'
import { useAppSelection } from '@/hooks/useAppSelection'
import { cn } from '@/utils'

export const App = () => {
  const { app, setApp } = useAppSelection()

  return (
    <div className="p-2">
      <div className="flex gap-2">
        <button
          className={cn('rounded border p-2 text-gray-700', app === 'vanilla' && 'bg-blue-500 text-white')}
          onClick={() => setApp('vanilla')}
        >
          Vanilla
        </button>
        <button
          className={cn('rounded border p-2 text-gray-700', app === 'zustand' && 'bg-blue-500 text-white')}
          onClick={() => setApp('zustand')}
        >
          Zustand
        </button>
        <button
          className={cn('rounded border p-2 text-gray-700', app === 'zustand-optimized' && 'bg-blue-500 text-white')}
          onClick={() => setApp('zustand-optimized')}
        >
          Zustand Optimized
        </button>
      </div>
      {app === 'vanilla' && <VanillaApp />}
      {app === 'zustand' && <ZustandApp />}
      {app === 'zustand-optimized' && <ZustandOptimizedApp />}
    </div>
  )
}
