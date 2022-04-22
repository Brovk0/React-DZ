import { useState } from 'react';
import styles from './time.module.css';




export function Time() {

   const [time, setTime] = useState((new Date().toLocaleTimeString()));

   setInterval(() => {
      setTime((new Date().toLocaleTimeString()));
   }, 1000);

   return (
      <div>
         <h1>{time}</h1>
      </div>
   );
}