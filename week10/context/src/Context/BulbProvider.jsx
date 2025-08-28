import { useState } from "react";
import { createContext } from "react"

const BulbContext = createContext();

const BulbProvider = ({children}) => {

  const [bulbState, setBulbState] = useState(true);

  return (
    <BulbContext.Provider value={{ bulbState:bulbState, setBulbState:setBulbState}}>
        {children}
    </BulbContext.Provider>
  )
}

export default BulbProvider
export {BulbContext}