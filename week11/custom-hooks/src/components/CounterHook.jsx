import React, { useState } from 'react'

// my custom hook
// making counter Hook that makes a counter and returns count state and increment function to increase count.
function useCounter(){  
  const [count, setCount] = useState(0);

  function increment(){
    setCount(c => c+1);
  }

  return {count: count, increment: increment}
}


const CounterHook = () => {
  // IMPORTANT: Using custom hooks is like writing the code of custom hook right in my component.
  const {count, increment} = useCounter();

  return (
    <div>
      <button onClick={increment}> increment {count}</button>
    </div>
  )
}

export default CounterHook;
