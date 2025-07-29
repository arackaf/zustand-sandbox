export const getStoredValue = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item) as T
    }
  } catch (err) {
    console.log(err)
  }
  return defaultValue
}

export const setStoredValue = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (err) {
    console.log(err)
  }
}
