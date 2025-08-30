import { useEffect, useState } from 'react';
import './App.css';
import CounterHook from './components/CounterHook';
import DebounceSearch from './components/debounceSearch';
import FetchHook from './components/FetchHook';
import PervHook from './components/pervHook';
import StatusBar from './components/StatusBar';

function App() {

  return(
    <div>
      
      {/* making counter Hook */}
      {/* <CounterHook/> */}


      {/* making fetch Hook */}
      {/* <FetchHook/> */}


      {/* custom hook to check if user is loggeding  */}
      {/* <StatusBar/> */}


      {/* use Prev hook */}
      {/* <PervHook/> */}

      {/* useDebounce custome hook */}
      <DebounceSearch/>
    </div>
  )
}

export default App
