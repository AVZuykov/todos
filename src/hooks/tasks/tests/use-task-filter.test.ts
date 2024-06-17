import { FilterKey } from '@interfaces/filter'
import type { Task } from '@interfaces/task-model'
import { act, renderHook } from '@testing-library/react'

import { useTasksFilter } from '../use-tasks-filter'

describe('useTaskFilter', () => {
  let tasks: Task[]

  beforeEach(() => {
    tasks = [
      { id: '1', task: 'Task 1', completed: false },
      { id: '2', task: 'Task 2', completed: true },
    ]
  })

  it('filters tasks based on filter key', () => {
    const { result } = renderHook(() => useTasksFilter(tasks))

    act(() => {
      result.current.handleFilterChange(FilterKey.Completed)
    })

    expect(result.current.filteredTasks.length).toBe(1)
    expect(result.current.filteredTasks[0].id).toBe('2')
  })
})
