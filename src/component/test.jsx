import React from 'react'
import { useCounter } from '../testt/useCounter'

const Test = () => {
    const {state, dispatch} = useCounter();
  return (
    <div>
        <h1>A usecontext test</h1>
        <h2>The count is : {state.count}</h2>
        <button onClick={()=> dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={()=> dispatch({type:"DECREMENT"})}>Decrement</button>
        <button onClick={()=> dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default Test