import styles from './photo.module.css';


export function Photo(){
return(
   <div className={styles.img}>
       <img src="https://upload.wikimedia.org/wikipedia/ru/9/98/Real_Madrid.png" alt="Photo Real Madrid" />
 </div>
);
}