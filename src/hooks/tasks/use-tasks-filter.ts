import { useCallback, useMemo, useState } from 'react'

import { type Filter, FilterKey } from '@interfaces/filter'
import type { Task } from '@interfaces/task-model'

const filterList: Filter[] = [
  { key: FilterKey.All, label: 'All' },
  { key: FilterKey.Active, label: 'Active' },
  { key: FilterKey.Completed, label: 'Completed' },
]

export const useTasksFilter = (tasks: Task[]) => {
  const [filter, setFilter] = useState<FilterKey>(FilterKey.All)

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) => {
        if (filter === FilterKey.Active) return !task.completed
        if (filter === FilterKey.Completed) return task.completed
        return true
      }),
    [filter, tasks]
  )

  const handleFilterChange = useCallback((key: string) => {
    setFilter(key as FilterKey)
  }, [])

  return { filteredTasks, handleFilterChange, filterList }
}
