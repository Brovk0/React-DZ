import { useState } from 'react';
import styles from './info.module.css';


export function Info({item}) {

   return (
      <div className={styles.info}>
         <div>

               <img className={styles.img} src={item.src} alt="Photo animal" />
            <p><span>Вид: </span>{item.types}</p>
            <p><span>Кличка: </span>{item.name}</p>
            <p><span>Порода: </span>{item.breed}</p>
            <p><span>Возраст: </span>{item.age}</p>
         </div>
      </div>
   );
}