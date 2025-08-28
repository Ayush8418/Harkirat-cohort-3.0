import { useState } from 'react'
import './App.css'
import { createContext } from 'react';
import { useContext } from 'react';
import BulbProvider, { BulbContext as BulbContext2 } from './Context/BulbProvider';

// Create Context | provide Context | use Context....

const BulbContext = createContext();               // creating global Context (mostly done in separate file)

function App() {
  const [bulbState, setBulbState] = useState(true);
  
  return (
    <div>
      {/* making State provider with values*/}
      <BulbContext.Provider value={{bulbState: bulbState, setBulbState: setBulbState}}>
        <Light/>
      </BulbContext.Provider>

      {/* <BulbProvider>
        <Light/>
      </BulbProvider> */}
    </div>
  )
}

function Light(){
  return (
    <div>
      <Bulb/>
      <Switch/>
    </div>
  )
}

function Bulb(){
  // using Context using useContext
  const {bulbState} = useContext(BulbContext);
  return(
    <div style={{backgroundColor: `${bulbState? "yellow" : "gray"}`}}>
      <h1>{bulbState ? "Bulb ON" : "Bulb OFF"}</h1>
    </div>
  )
}

function Switch(){
  // using Context using useContext
  const {setBulbState} = useContext(BulbContext);

  function toggleState(){
    setBulbState(b => !b);
  }

  return (
    <div>
      <button onClick={toggleState}>Toggle</button>
    </div>
  )
}

export default App
