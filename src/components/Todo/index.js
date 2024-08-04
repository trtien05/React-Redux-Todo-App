import React from 'react'
import './Todo.css'
import TodoList from './TodoList'
import CreateTodo from './CreateTodo'
const Todo = () => {
  return (
    <div>
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default Todo