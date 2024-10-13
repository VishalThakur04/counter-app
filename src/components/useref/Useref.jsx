import React, { useState,useRef } from 'react'

export const Useref = () => {
    const [time,setTime]=useState(0);
    let timeRef=useRef(null);
    
    const startTime=()=>{
timeRef.current=setInterval(()=>{
setTime(time=>time+1)
},1000);
    }
    const stopTime=()=>{
        clearInterval(timeRef.current);
        timeRef.current=null;

    }
    const resetTime=()=>{
       stopTime()
       setTime(0)
    }

  return (
    <div>
        <h1>Time{time}</h1>
        <button onClick={startTime}>start</button>
        <br />
        <button onClick={stopTime}>Stop</button>
        <br />
        <button onClick={resetTime}>Reset</button>
    </div>
  )
}
