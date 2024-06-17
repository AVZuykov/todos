import React, { FC, useState } from 'react'

import { Input } from 'antd'

import { TaskInputProps } from './types'

export const TaskInput: FC<TaskInputProps> = ({ onEnter }: TaskInputProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputEnter = () => {
    if (inputValue.trim() !== '') {
      onEnter(inputValue)
      setInputValue('')
    }
  }

  return (
    <Input
      value={inputValue}
      onChange={handleInputChange}
      allowClear
      placeholder="What needs to be done"
      onPressEnter={handleInputEnter}
    />
  )
}
