import { Col, Flex, Row, Typography } from 'antd'

import { TaskInput, TaskList } from '@components'
import { useTasks, useTasksFilter } from '@hooks'
import type { Task } from '@interfaces/task-model'

const defaultTasks: Task[] = [
  { task: 'Тестовое задание.', completed: false, id: '0' },
  { task: 'Прекрасный код.', completed: true, id: '1' },
  { task: 'Покрытие тестами.', completed: false, id: '2' },
]

export const Home = () => {
  const taskManager = useTasks(defaultTasks)
  const taskFilter = useTasksFilter(taskManager.tasks)

  return (
    <Row align="top" justify="center">
      <Col xs={{ span: 20 }} md={{ span: 12 }}>
        <Flex vertical gap={24}>
          <Typography.Title>Todos</Typography.Title>

          <TaskInput onEnter={taskManager.handleAddTask} />

          <TaskList {...taskManager} {...taskFilter} />
        </Flex>
      </Col>
    </Row>
  )
}

export default Home
