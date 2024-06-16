import type { Task } from '@interfaces/task-model'

export interface TaskListProps {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
}
