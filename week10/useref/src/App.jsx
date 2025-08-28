import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
import Timer from './Components/Timer';
import Form from './Components/Form';

function App() {
  return(
    <div>

      What is UseRef? <br />
      useRef is a hook that helps to point/Refer to value or DOM element <br />
      and persist across the renders(Like State) and does not triggers render on value/DOM change(Like variables) <br />

      {/* making form and using UseRef to point to the input feilds */}
      <div style={{border: "1px solid purple", padding: "20px", margin: "20px"}}>
        <Form/>
      </div>


      {/* making form and using UseRef to point to the value feilds */}
      <div style={{border: "1px solid purple", padding: "20px", margin: "20px"}}>
        <Timer/>
      </div>
    </div>
  )
}

export default App
