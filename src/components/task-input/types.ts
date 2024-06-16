import { InputProps } from 'antd/lib/input'

export interface TaskInputProps extends InputProps {
  onEnter: (value: string) => void
}
