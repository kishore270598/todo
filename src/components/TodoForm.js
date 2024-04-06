import React from 'react'

export const Todoform = () => {
  return (
    <form className='Todoform'>
      <input type='text' className='todo-input' placeholder='What is the task today!' />
      <button type='submit' className='todo-btn'/>
    </form>

  )
}
