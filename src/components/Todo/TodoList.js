import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { backTodo, completedTodo, deleteTodo } from '../../actions/todo';

function TodoList() {
  const listTodo = useSelector(state => state.todoReducer)
  const dispatch = useDispatch();

  const handleFinish = (id) => {
    dispatch(completedTodo(id))
  }

  const handleBack = (id) => {
    dispatch(backTodo(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      <div className='todo__list'>
        {listTodo.map(item => (
          <div className={'todo__item' + (item.completed ?
            " todo__item--completed" : "")
          }
            key={item.id}
          >
            <span>{item.content}</span>
            {item.completed ? (
              <button onClick={() => handleBack(item.id)}>Tro lai</button>
            ) : (
              <button onClick={() => handleFinish(item.id)}>Xong</button>
            )}
            <button onClick={() => handleDelete(item.id)}>Xoa</button>
          </div>
        ))}
      </div>
    </>

  )
}

export default TodoList