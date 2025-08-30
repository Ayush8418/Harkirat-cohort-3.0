import { useEffect, useState } from "react";

export default function useDebounce(state){
    const [debounceVal, setDebounceVal] = useState();
    
    useEffect(()=>{

        const id = setTimeout(()=>{
            setDebounceVal(state)       // on the pause of 2 secs the setTimeout functions executes and the debounceVal is changed.
        }, 2000)

        return ()=>{
            clearInterval(id);
        }

    }, [state])    //when the state changes the previous setInterval is cleared and the new setInterval is called

    return debounceVal;
}