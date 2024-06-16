import { useState } from 'react'

import type { Filter } from '@interfaces/filter'
import type { Task } from '@interfaces/task-model'

export const useTaskFilter = (tasks: Task[]) => {
  const [filter, setFilter] = useState<Filter['key']>('all')

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const handleFilterChange = (key: string) => {
    setFilter(key as Filter['key'])
  }

  return { filteredTasks, handleFilterChange }
}
