import type { FC } from "react";
import { useState, useEffect } from "react";
import { useTasksContext } from "../tasks-context";

export const Filter: FC = () => {
  console.log("Rendering Filter");

  const { currentFilter, setCurrentFilter } = useTasksContext();
  const [inputValue, setInputValue] = useState(currentFilter);

  // Reset local input when app state changes
  useEffect(() => {
    setInputValue(currentFilter);
  }, [currentFilter]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCurrentFilter(inputValue);
    }
  };

  const handleBlur = () => {
    setInputValue(currentFilter);
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium">Filter:</label>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder="Enter filter value..."
        className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
