import { ClubAchievements } from '../clubAchievements/clubAchievements';
import { ClubLineUp } from '../clubLine-up/clubLineUp';
import styles from './clubInformation.module.css';
import { Photo } from './photo/photo';

export function ClubInformation() {
   return (
      <div className={styles.clubInformation}>
        <Photo/>
         <div className={styles.info}>
            <h1>Реал Мадрид</h1>
            <p><span>Город: </span>Мадрид</p>
            <p><span>Дата основания: </span>6 марта 1902 года</p>
            <ClubAchievements/>
            <ClubLineUp/>
         </div>
      </div>
   )
};