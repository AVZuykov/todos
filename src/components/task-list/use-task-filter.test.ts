import type { Task } from '@interfaces/task-model'
import { act, renderHook } from '@testing-library/react'

import { useTaskFilter } from './use-task-filter'

describe('useTaskFilter', () => {
  it('filters tasks based on filter key', () => {
    const tasks: Task[] = [
      { id: 1, task: 'Task 1', completed: false },
      { id: 2, task: 'Task 2', completed: true },
    ]
    const { result } = renderHook(() => useTaskFilter(tasks))

    act(() => {
      result.current.handleFilterChange('completed')
    })

    expect(result.current.filteredTasks.length).toBe(1)
    expect(result.current.filteredTasks[0].id).toBe(2)
  })
})
