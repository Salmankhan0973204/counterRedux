import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter:React.FC = () => {
    const count =useSelector((state:any) => state.counter.count)
    const dispatch = useDispatch()
  
  return (
    <div>
           <button onClick={()=>{dispatch(increment())}}>+</button>
      <span>Count: {count}</span>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  )
}

export default Counter