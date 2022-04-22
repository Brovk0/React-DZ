import { ClubInformation } from './clubInformation/clubInformation';
import styles from './footballClub.module.css';

export function FootballClub(){
return(
   <div className={styles.footballClub}>
<ClubInformation/>

   </div>

)
};