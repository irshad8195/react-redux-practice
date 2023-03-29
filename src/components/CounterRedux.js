import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DecrementCount, IncrementCount, ResetCount } from '../actions/CounterAction'



const CounterRedux = () => {
    const storeState=useSelector(state => state.count)
    console.log(storeState)
    const dispatch=useDispatch()

    const [count, setCount]=useState(0)


useEffect (()=>{
setCount(storeState)
}, [storeState])


    const onHandleIncrement=()=>{
       dispatch(IncrementCount())
    }
   const onHandleDecrement=()=>{
   dispatch(DecrementCount())
   } 
   const onHandleReset =()=>{
   dispatch(ResetCount())
   }
  return (
    <div >  Counter Redux <br/>
      <div>
    Count:{count}
    </div>
    <div>
<button onClick={onHandleIncrement}>Increment</button>

<button onClick={onHandleDecrement}>Decrement</button>
  
<button onClick={onHandleReset}>Reset</button>
</div>

  </div>
  
  )
}

export default CounterRedux
