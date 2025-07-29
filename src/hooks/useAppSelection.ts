import type { AppType } from '@/types'

import { useLocalStorage } from './useLocalStorage'

const LOCAL_STORAGE_KEY = 'zustand-sandbox-current-app'
const APPS: AppType[] = ['vanilla', 'zustand', 'zustand-optimized', 'zustand-hooks']
const VALID_APPS = new Set<AppType>(APPS)

export const useAppSelection = () => {
  const [app, setApp] = useLocalStorage<AppType>(LOCAL_STORAGE_KEY, 'vanilla')

  // Validate the stored value
  const validApp = VALID_APPS.has(app) ? app : 'vanilla'

  return { app: validApp, setApp }
}
