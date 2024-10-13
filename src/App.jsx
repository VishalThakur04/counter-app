
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/CounterSlice';
import { useState } from 'react';
import { Useref } from './components/useref/Useref';
import { Counter } from './components/counter/Counter';
import { UseCallbackHook } from './components/counter/UseCallbackHook';


function App() {
  const [amount,setAmount]=useState(0);
const count=useSelector((state)=>state.counter.value);
const dispatch=useDispatch();

  const handleIncrementclick=()=>{
dispatch(increment())
  }
  const handleDecrementclick=()=>{
     dispatch(decrement())
  }
  const handleResetclick=()=>{
   dispatch(reset())
  }
  const handleamount=()=>{
    dispatch(incrementByAmount(amount))
  }

  return (
   <div className='container'>
    {/* <button onClick={handleIncrementclick}>+</button>
    <p>count:{count}</p>
    <button onClick={handleDecrementclick}>-</button>
    <button onClick={handleResetclick}>Reset</button>
     <input 
     type="number"
     value={amount}
     onChange={(e)=> setAmount(e.target.value)}
     />
     <button onClick={handleamount}>inc by amount</button>
     <Useref/> */}
     {/* <Counter/> */}
     <UseCallbackHook/>
   </div>
  )
}

export default App
