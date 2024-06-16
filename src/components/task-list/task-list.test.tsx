import React from 'react'

import type { Task } from '@interfaces/task-model'
import { fireEvent, render, screen } from '@testing-library/react'

import { TaskList } from './task-list'

describe('TaskList', () => {
  let tasks: Task[]

  beforeEach(() => {
    tasks = [
      { id: 1, task: 'Task 1', completed: false },
      { id: 2, task: 'Task 2', completed: true },
    ]
  })

  it('renders tasks correctly', () => {
    render(<TaskList tasks={tasks} setTasks={() => {}} />)
    const displayedTasks = screen.getAllByRole('checkbox')
    expect(displayedTasks.length).toBe(2)
  })

  it('toggles task completion', () => {
    const setTasks = jest.fn()
    render(<TaskList tasks={tasks} setTasks={setTasks} />)
    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[0])

    expect(setTasks).toHaveBeenCalled()
  })

  it('clears all tasks', () => {
    const setTasks = jest.fn()
    render(<TaskList tasks={tasks} setTasks={setTasks} />)
    const clearAllButton = screen.getByRole('button', { name: /clear all/i })
    fireEvent.click(clearAllButton)

    expect(setTasks).toHaveBeenCalledWith([])
  })

  it('clears completed tasks', () => {
    const setTasks = jest.fn()
    render(<TaskList tasks={tasks} setTasks={setTasks} />)
    const clearCompletedButton = screen.getByRole('button', { name: /clear completed/i })
    fireEvent.click(clearCompletedButton)

    expect(setTasks).toHaveBeenCalledWith([tasks[0]])
  })
})
