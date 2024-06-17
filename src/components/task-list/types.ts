import type { Filter } from '@interfaces/filter'
import type { Task } from '@interfaces/task-model'

export interface TaskListProps {
  tasks: Task[]
  filteredTasks: Task[]
  filterList: Filter[]
  handleClearAll: () => void
  handleClearCompleted: () => void
  handleToggleTaskCompletion: (id: string) => void
  handleFilterChange: (key: string) => void
}
