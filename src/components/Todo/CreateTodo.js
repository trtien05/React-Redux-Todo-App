import React from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../../actions/todo';

const CreateTodo = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.elements.todo.value
    if (content.length > 0) {
      dispatch(createTodo(content))
      e.target.elements.todo.value = '';
    }
  }
  return (
    <form className='todo__form' onSubmit={handleSubmit}>
      <input className='todo__input' name='todo' placeholder='Input task...' />
      <button>+</button>
    </form>
  )
}

export default CreateTodo