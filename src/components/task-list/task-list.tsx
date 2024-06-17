import React, { FC } from 'react'

import { Button, Checkbox, Flex, List, Space, Tabs, Typography } from 'antd'

import { FilterKey } from '@interfaces/filter'

import type { TaskListProps } from './types'

export const TaskList: FC<TaskListProps> = ({
  filteredTasks,
  tasks,
  filterList,
  handleClearAll,
  handleClearCompleted,
  handleToggleTaskCompletion,
  handleFilterChange,
}) => {
  const isDisabledClearAll = tasks.length === 0
  const isDisabledClearCompleted = tasks.length === 0 || !tasks.some((task) => task.completed)

  const toggleTaskCompletion = (id: string) => () => handleToggleTaskCompletion(id)

  const taskCount = filteredTasks.length

  return (
    <List
      header={<Tabs defaultActiveKey={FilterKey.All} items={filterList} onChange={handleFilterChange} />}
      footer={
        <Flex justify="space-between">
          <div>Total tasks: {taskCount}</div>
          <Space>
            <Button disabled={isDisabledClearAll} onClick={handleClearAll}>
              Clear all
            </Button>
            <Button disabled={isDisabledClearCompleted} onClick={handleClearCompleted}>
              Clear completed
            </Button>
          </Space>
        </Flex>
      }
      bordered
      dataSource={filteredTasks}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Checkbox checked={item.completed} onChange={toggleTaskCompletion(item.id)}>
            <Typography.Text
              key={item.completed ? `text-${item.id}-completed` : `text-${item.id}`}
              delete={item.completed}
            >
              {item.task}
            </Typography.Text>
          </Checkbox>
        </List.Item>
      )}
    />
  )
}
