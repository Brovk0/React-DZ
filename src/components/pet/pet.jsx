import { useState } from 'react';
import styles from './pet.module.css';
import { Info } from './info/info';


export function Pet() {

   const [data, setdata] = useState([
      { id: 1, types: "Собака", name: "Эрик", breed: "Шпиц", age: "1,5", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pom_Narva_CACIB_2014.JPG/330px-Pom_Narva_CACIB_2014.JPG" },
      { id: 2, types: "Кот", name: "Кэри", breed: "Британка", age: "6", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Britishblue.jpg/372px-Britishblue.jpg" },
      { id: 3, types: "Попугай", name: "Гоша", breed: "Волнистые", age: "10", src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Budgerigar_1_%2820123571788%29.jpg/413px-Budgerigar_1_%2820123571788%29.jpg' },
   ]);

   return (
      <div className={styles.pets}>
         <div>
            <h1>«Домашний любимец»</h1>
         </div>
         <div className={styles.pet}>
            {data.map(item =>
               <Info key={item.id}
                  item={item}
               />)}
         </div>


      </div>
   );
}