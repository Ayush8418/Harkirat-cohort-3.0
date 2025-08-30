import React, { useRef, useState } from 'react'
import {usePrev} from '../helper/usePrev';

// ---------------------  to get the prev value without using custom hooks we use ref value and update accordingly in the increment function
// const PervHook = () => {

//   const prevCount = useRef();
//   const [count, setCount] = useState(1);

//   function increment(){
//     setCount( c => {
//         prevCount.current = c;
//         return c+1;
//     })
//   }

//   return (
//     <div>
//       Count: {count}
//       <br />
//       <button onClick={increment}> Click me</button>
//       <br />
//       prev value of Count : {prevCount.current}
//     </div>
//   )
// }
// export default PervHook


//------------- using custom hook to get prev value of a state
const PervHook = () => {

  const [count, setCount] = useState(1);
  const prevCount = usePrev(count);

  return (
    <div>
        Count: {count}
        <br />
        <button onClick={() => setCount(c => c+1)}> Increment </button>
        <button onClick={() => setCount(c => c-1)}> Decrement </button>
        <br />
        prev value of Count : {prevCount}
    </div>
  )
}

export default PervHook;