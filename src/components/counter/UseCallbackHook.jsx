import React, { useCallback, useState } from 'react'
import { Chlid } from './Chlid';

export const UseCallbackHook = () => {
    const [count,setCount]=useState(0);
    const handleclick=useCallback(()=>{
        setCount(count+1)
    },[count])
  return (
    <div>
        <div>
            <button onClick={handleclick}>inmcrement</button>
        </div>
        <div>
            <p>{count}</p>
        </div>
        <Chlid buttonName={'click me'}
          handleclick={handleclick}
        />
    </div>
  )
}
