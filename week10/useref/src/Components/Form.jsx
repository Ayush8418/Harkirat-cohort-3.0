import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const Form = () => {
    const [name, setName] = useState("guest");
    const fNameRef = useRef();
    const lNameRef = useRef();

    function printFullName(){
        setName(fNameRef.current.value + lNameRef.current.value);
    }

  return (
    <div>
      <p>Hello {name}</p>

      <input type="text" ref={fNameRef}/>
      <br />
      <input type="text" ref={lNameRef}/>
      <br />
      <button onClick={printFullName}>submit</button>
    </div>
  )
}

export default Form
