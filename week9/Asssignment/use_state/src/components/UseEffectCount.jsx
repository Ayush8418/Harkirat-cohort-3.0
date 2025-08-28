import React, { useEffect, useState } from 'react'

const UseEffectCount = () => {

  const [count, setCount] = useState(0);

  // Not outside use Effect 
  // starts new interval on every rerender.
  // and rerender happend on every state change
  // setInterval(() => {
  //   setCount(c => c+1);
  // }, 1000);

  useEffect(()=>{

    const id = setInterval(() => {
      setCount(c => c+1);
    }, 1000);

    return (()=>{
      clearInterval(id);
    })

  }, []);

  useEffect(()=>{
    console.log("count Increased.");
  }, [count]);

  function decrementCount(){
    setCount(c => c-1);
  }

  return (
    <div>
      {count}
      <button onClick={decrementCount}>decrement</button>
    </div>
  )
}

export default UseEffectCount;
