import { useState } from 'react';
import styles from './biography.module.css';
import { Info } from './info/info';
import { Photo } from './photo/photo';


export function Biography() {

   return (
      <div className={styles.biography}>
         <Photo />
         <Info />
      </div>
   );
}