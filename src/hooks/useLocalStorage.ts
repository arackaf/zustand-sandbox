import { useEffect, useState } from 'react'

import { getStoredValue, setStoredValue } from '@/utils/storage'

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    return getStoredValue<T>(key, defaultValue)
  })

  useEffect(() => {
    setStoredValue(key, value)
  }, [key, value])

  return [value, setValue] as const
} 