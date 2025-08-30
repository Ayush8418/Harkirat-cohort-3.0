import React, { useEffect, useState } from 'react'
import useDebounce from '../helper/useDebounce';

// const DebounceSearch = () => {

//   const [userInput, setUserInput] = useState("");
//   const [userInput2, setUserInput2] = useState("");

//   useEffect(()=>{

//     const id = setTimeout(()=>{
//         setUserInput2(userInput);
//     }, 500);

//     return () => {
//         clearInterval(id);
//     }

//   }, [userInput])

//   return (
//     <div>

//       {userInput}

//       <br /><br />

//       <input type="text" value={userInput} onChange={(e)=> {setUserInput(e.target.value)}}/>

//       <br /><br />

//       {userInput2}

//     </div>
//   )
// }

// export default DebounceSearch


const DebounceSearch = () => {

  const [userInput, setUserInput] = useState("");

  const debounceVal = useDebounce(userInput);  // my useDebounce() hook keeps looking at the state (userInput) and returns the debounceVal on pause of 2 secs.

  useEffect(()=>{
    console.log("expensive Operation.");   // expensive operation is called when the debounceVal us changed.
  }, [debounceVal]);

  return (
    <div>

      {userInput}

      <br /><br />

      <input type="text" value={userInput} onChange={(e)=> {setUserInput(e.target.value)}}/>

      <br /><br />

      {debounceVal}

    </div>
  )
}

export default DebounceSearch
