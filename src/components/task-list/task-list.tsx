import React from 'react'

import { Button, Checkbox, Flex, List, Space, Tabs } from 'antd'

import type { Filter } from '@interfaces/filter'

import { TaskListProps } from './types'
import { useTaskFilter } from './use-task-filter'

const filterList: Filter[] = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

export const TaskList = ({ setTasks, tasks }: TaskListProps) => {
  const { filteredTasks, handleFilterChange } = useTaskFilter(tasks)

  const toggleTaskCompletion = (id: number) => {
    const newTasks = [...tasks]
    const task = newTasks.find((task) => task.id === id)

    if (task) {
      task.completed = !task.completed
      setTasks(newTasks)
    }
  }

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed))
  }

  const clearAll = () => {
    setTasks([])
  }

  const isDisabledClearAll = tasks.length === 0
  const isDisabledClearCompleted = tasks.length === 0 || !tasks.some((task) => task.completed)

  return (
    <List
      header={<Tabs defaultActiveKey="all" items={filterList} onChange={handleFilterChange} />}
      footer={
        <Flex justify="space-between">
          <div>Total tasks: {filteredTasks.length}</div>
          <Space>
            <Button disabled={isDisabledClearAll} onClick={clearAll}>
              Clear all
            </Button>
            <Button disabled={isDisabledClearCompleted} onClick={clearCompleted}>
              Clear completed
            </Button>
          </Space>
        </Flex>
      }
      bordered
      dataSource={filteredTasks}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Checkbox checked={item.completed} onChange={() => toggleTaskCompletion(item.id)}>
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.task}</span>
          </Checkbox>
        </List.Item>
      )}
    />
  )
}
