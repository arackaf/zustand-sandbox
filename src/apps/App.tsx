import { useEffect, useState } from 'react'

import { VanillaApp } from '@/apps/vanilla/VanillaApp'
import { ZustandOptimizedApp } from '@/apps/zustand-optimized/ZustandOptimizedApp'
import { ZustandApp } from '@/apps/zustand/ZustandApp'
import type { AppType } from '@/types'
import { cn } from '@/utils'
import { getStoredValue, setStoredValue } from '@/utils/storage'

const LOCAL_STORAGE_KEY = 'zustand-sandbox-current-app'

const apps = new Set<AppType>(['vanilla', 'zustand', 'zustand-optimized'])

export const App = () => {
  const [app, setApp] = useState<AppType>(() => {
    const saved = getStoredValue<AppType>(LOCAL_STORAGE_KEY, 'vanilla')
    if (apps.has(saved)) {
      return saved
    }
    return 'vanilla'
  })

  // Sync app type to local storage whenever app state changes
  useEffect(() => {
    setStoredValue(LOCAL_STORAGE_KEY, app)
  }, [app])

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
