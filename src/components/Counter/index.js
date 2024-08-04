import React from 'react'
import { counterReducer } from '../../reducers/counter'
import { useDispatch, useSelector } from 'react-redux'
import { down, reset, up } from '../../actions/counter';

const Counter = () => {
  const count = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  const handleUp = () => {
    dispatch(up(1))
  }

  const handleDown = () => {
    dispatch(down(1))
  }

  const handleReset = () => {
    dispatch(reset(1))
  }
  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={handleUp}>+</button>
      <button onClick={handleDown}>-</button>
      <button onClick={handleReset}>Reset</button>

    </>

  )
}

export default Counter