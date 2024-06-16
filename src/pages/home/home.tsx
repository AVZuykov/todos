import { useRef, useState } from 'react'

import { Col, Row, Typography } from 'antd'

import { TaskInput, TaskList } from '@components'
import type { Task } from '@interfaces/task-model'

const defaultTasks: Task[] = [
  { task: 'Тестовое задание.', completed: false, id: 0 },
  { task: 'Прекрасный код.', completed: true, id: 1 },
  { task: 'Покрытие тестами.', completed: false, id: 2 },
]

export const Home = () => {
  const [tasks, setTasks] = useState(defaultTasks)
  const taskIdRef = useRef(Number(defaultTasks[defaultTasks.length - 1].id) + 1)

  const addTask = (task: string) => {
    setTasks([...tasks, { task, completed: false, id: taskIdRef.current }])
    taskIdRef.current++
  }

  return (
    <Row align="top" justify="center" style={{ marginTop: '15vh', height: '85vh' }}>
      <Col xs={{ span: 20 }} md={{ span: 12 }}>
        <Typography.Title>Todos</Typography.Title>

        <TaskInput onEnter={addTask} style={{ marginBottom: '1rem' }} />

        <TaskList tasks={tasks} setTasks={setTasks} />
      </Col>
    </Row>
  )
}

export default Home
