import { VanillaApp } from '@/apps/vanilla/VanillaApp'
import { ZustandHooksApp } from '@/apps/zustand-hooks/ZustandHooksApp'
import { ZustandOptimizedApp } from '@/apps/zustand-optimized/ZustandOptimizedApp'
import { ZustandApp } from '@/apps/zustand/ZustandApp'
import { useAppSelection } from '@/hooks/useAppSelection'
import type { AppType } from '@/types'
import { cn } from '@/utils'

const APP_CONFIG: Record<AppType, { label: string; component: React.ComponentType }> = {
  vanilla: { label: 'Vanilla', component: VanillaApp },
  zustand: { label: 'Zustand', component: ZustandApp },
  'zustand-optimized': { label: 'Zustand Optimized', component: ZustandOptimizedApp },
  'zustand-hooks': { label: 'Zustand Hooks', component: ZustandHooksApp },
}

export const App = () => {
  const { app, setApp } = useAppSelection()
  const CurrentApp = APP_CONFIG[app]?.component

  return (
    <div className="p-2">
      <div className="flex gap-2">
        {Object.entries(APP_CONFIG).map(([key, { label }]) => (
          <button
            key={key}
            className={cn('rounded border p-2 text-gray-700', app === key && 'bg-blue-500 text-white')}
            onClick={() => setApp(key as AppType)}
          >
            {label}
          </button>
        ))}
      </div>
      {CurrentApp && <CurrentApp />}
    </div>
  )
}
