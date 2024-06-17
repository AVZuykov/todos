import { Task } from '@interfaces/task-model'
import { act, renderHook } from '@testing-library/react'

import { useTasks } from '../use-tasks'

jest.mock('uuid', () => ({
  v4: jest.fn(() => 'unique-id'), // Предоставляет конкретную реализацию
}))

describe('useTasks', () => {
  let tasks: Task[]

  beforeEach(() => {
    tasks = [
      { id: '1', task: 'Task 1', completed: false },
      { id: '2', task: 'Task 2', completed: true },
    ]
  })

  it('initializes tasks correctly', () => {
    const { result } = renderHook(() => useTasks(tasks))

    expect(result.current.tasks).toEqual(tasks)
  })

  it('toggles task completion', () => {
    const { result } = renderHook(() => useTasks(tasks))

    act(() => {
      result.current.handleToggleTaskCompletion('1')
    })

    expect(result.current.tasks[0].completed).toBe(true)
  })

  it('adds a new task', () => {
    const { result } = renderHook(() => useTasks([]))

    act(() => {
      result.current.handleAddTask('New Task')
    })

    expect(result.current.tasks).toEqual([{ task: 'New Task', completed: false, id: 'unique-id' }])
  })

  it('clears completed tasks', () => {
    const { result } = renderHook(() => useTasks(tasks))

    act(() => {
      result.current.handleClearCompleted()
    })

    expect(result.current.tasks).toEqual([{ id: '1', task: 'Task 1', completed: false }])
  })

  it('clears all tasks', () => {
    const { result } = renderHook(() => useTasks(tasks))

    act(() => {
      result.current.handleClearAll()
    })

    expect(result.current.tasks).toEqual([])
  })
})
