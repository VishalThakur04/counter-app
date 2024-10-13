import React, { useMemo, useState } from 'react'


export const Counter = () => {
    const [count,setCount]=useState(0)
    const [input,setInput]=useState(0)

    const exptask=(num)=>{
        for (let i = 0; i <100000000; i++) {}
        return num*2
    }
    let value=useMemo(()=>exptask(input),[input]);
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <p>{count}</p>
        <p>task{value}</p>
        <input type="text"
        placeholder='enetr value'
        value={input} 
        onChange={(e)=>setInput(e.target.value)}/>
       
    </div>
  )
}
