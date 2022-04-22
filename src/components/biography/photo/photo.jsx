import styles from './photo.module.css';


export function Photo(){
return(
   <div className={styles.img}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Hw-shakespeare.png" alt="photo Shakespeare" />
 </div>
);
}