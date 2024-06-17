import React from 'react'

import { type Filter, FilterKey } from '@interfaces/filter'
import type { Task } from '@interfaces/task-model'
import { fireEvent, render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { TaskList } from '../task-list'

// Мок данных
const tasks: Task[] = [
  { id: '1', task: 'Learn React', completed: false },
  { id: '2', task: 'Write Tests', completed: true },
]
const filterList: Filter[] = [
  { label: 'All', key: FilterKey.All },
  { label: 'Completed', key: FilterKey.Completed },
  { label: 'Active', key: FilterKey.Active },
]

describe('TaskList', () => {
  it('renders tasks correctly', () => {
    render(
      <TaskList
        tasks={tasks}
        filteredTasks={tasks}
        filterList={filterList}
        handleClearAll={jest.fn()}
        handleClearCompleted={jest.fn()}
        handleToggleTaskCompletion={jest.fn()}
        handleFilterChange={jest.fn()}
      />
    )

    // Проверяем отображение количества задач
    expect(screen.getByText('Total tasks: 2')).toBeInTheDocument()

    // Проверяем отображение каждой задачи
    tasks.forEach((task) => {
      expect(screen.getByText(task.task)).toBeInTheDocument()
    })
  })

  it('enables clear buttons correctly', () => {
    render(
      <TaskList
        tasks={tasks}
        filteredTasks={tasks}
        filterList={filterList}
        handleClearAll={jest.fn()}
        handleClearCompleted={jest.fn()}
        handleToggleTaskCompletion={jest.fn()}
        handleFilterChange={jest.fn()}
      />
    )

    // Кнопка "Clear all" активна, так как есть задачи
    expect(screen.getByText('Clear all')).toBeEnabled()

    // Кнопка "Clear completed" активна, так как есть завершённые задачи
    expect(screen.getByText('Clear completed')).toBeEnabled()
  })

  it('handles task completion toggle', () => {
    const handleToggleTaskCompletion = jest.fn()
    render(
      <TaskList
        tasks={tasks}
        filteredTasks={tasks}
        filterList={filterList}
        handleClearAll={jest.fn()}
        handleClearCompleted={jest.fn()}
        handleToggleTaskCompletion={handleToggleTaskCompletion}
        handleFilterChange={jest.fn()}
      />
    )

    // Имитация клика по чекбоксу первой задачи
    fireEvent.click(screen.getAllByRole('checkbox')[0])
    expect(handleToggleTaskCompletion).toHaveBeenCalledWith('1')
  })

  it('handles filter changes', () => {
    const handleFilterChange = jest.fn()
    render(
      <TaskList
        tasks={tasks}
        filteredTasks={tasks}
        filterList={filterList}
        handleClearAll={jest.fn()}
        handleClearCompleted={jest.fn()}
        handleToggleTaskCompletion={jest.fn()}
        handleFilterChange={handleFilterChange}
      />
    )

    // Имитация изменения фильтра
    fireEvent.click(screen.getByText('Completed'))
    expect(handleFilterChange).toHaveBeenCalledWith(FilterKey.Completed)
  })
})
