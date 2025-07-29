import { useEffect, useState } from 'react'

import { useTasksStoreOptimized } from '@/apps/zustand-optimized/store/tasks'

export const TasksFilter = () => {
  console.log('Rendering Filter')

  const currentFilter = useTasksStoreOptimized((state) => state.currentFilter)
  const setCurrentFilter = useTasksStoreOptimized((state) => state.setCurrentFilter)
  const [inputValue, setInputValue] = useState(currentFilter)

  useEffect(() => {
    setInputValue(currentFilter)
  }, [currentFilter])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCurrentFilter(inputValue)
    }
  }

  const handleBlur = () => {
    setInputValue(currentFilter)
  }

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium">Filter:</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder="Enter filter value..."
        className="rounded-md border border-gray-300 px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  )
}
