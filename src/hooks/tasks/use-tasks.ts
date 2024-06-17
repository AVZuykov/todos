import { useCallback, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import type { Task } from '@interfaces/task-model'

export const useTasks = (defaultTasks: Task[]) => {
  const [tasks, setTasks] = useState(defaultTasks)

  const handleToggleTaskCompletion = useCallback(
    (id: string) => {
      const newTasks = [...tasks]
      const task = newTasks.find((task) => task.id === id)

      if (task) {
        task.completed = !task.completed
        setTasks(newTasks)
      }
    },
    [tasks]
  )

  const handleAddTask = useCallback(
    (task: string) => {
      setTasks([...tasks, { task, completed: false, id: uuidv4() }])
    },
    [tasks]
  )

  const handleClearCompleted = useCallback(() => {
    setTasks(tasks.filter((task) => !task.completed))
  }, [tasks])

  const handleClearAll = useCallback(() => {
    setTasks([])
  }, [tasks])

  return {
    handleToggleTaskCompletion,
    handleAddTask,
    handleClearCompleted,
    handleClearAll,
    tasks,
  }
}
