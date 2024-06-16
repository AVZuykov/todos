import React, { ReactNode, useState } from 'react'

import { Input } from 'antd'

import { TaskInputProps } from './types'

export const TaskInput = ({ onEnter, ...props }: TaskInputProps): ReactNode => {
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
      {...props}
      value={inputValue}
      onChange={handleInputChange}
      allowClear
      placeholder="What needs to be done"
      onPressEnter={handleInputEnter}
    />
  )
}
