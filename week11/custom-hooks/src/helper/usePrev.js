import { useEffect, useRef } from "react";

// IMPORTANT: the usePrev function/Hook returns first then runs UseEffect
//            This is seen every in every component too.
//            thus it returns the previous value of state then updates it in the useEffect.

// This prev hook runs on every render of component.
// The useRef() runs only on its first render (default behaviour of Ref). 

export const usePrev = (count) => {
    const prevCount = useRef();

    useEffect(()=>{
        prevCount.current = count;
    }, [count])

    return prevCount.current;
}

