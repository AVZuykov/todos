import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { TaskInput } from './task-input'

describe('TaskInput', () => {
  it('calls onEnter with the input value when Enter is pressed', () => {
    const handleEnter = jest.fn()
    render(<TaskInput onEnter={handleEnter} />)
    const input = screen.getByPlaceholderText('What needs to be done')
    fireEvent.change(input, { target: { value: 'New Task' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(handleEnter).toHaveBeenCalledWith('New Task')
  })

  it('clears the input after entering', () => {
    const handleEnter = jest.fn()
    render(<TaskInput onEnter={handleEnter} />)
    const input = screen.getByPlaceholderText('What needs to be done') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'New Task' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(input.value).toBe('')
  })
})
