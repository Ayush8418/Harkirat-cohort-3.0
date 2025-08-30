import { useState, useEffect } from 'react';
import useIsOnline from '../helper/useIsOnline';

export default function StatusBar() {
  // making my custom hook in same fileb to check if the user os online or not.

  // const [isOnline, setIsOnline] = useState(true);
  // useEffect(() => {
  //   function handleOnline() {
  //     setIsOnline(true);
  //   }
  //   function handleOffline() {
  //     setIsOnline(false);
  //   }
  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOffline);
  //   return () => {
  //     window.removeEventListener('online', handleOnline);
  //     window.removeEventListener('offline', handleOffline);
  //   };
  // }, []);

  //making the custom hook in separate file.
  const isOnline = useIsOnline();

  return (
    <div>
      
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>

    </div>
  );
}
