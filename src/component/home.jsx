import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counter';

const Home = () => {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>The count is : {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>IncrementBy33</button>
    </div>
  )
}

export default Home