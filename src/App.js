import './App.css';
import {Biography} from './components/biography/biography';
import { FootballClub } from './components/footballСlub/footballClub';
import { Pet } from './components/pet/pet';
import { Time } from './components/time/time';

function App() {
  return (
    <div className="App">
      <Biography />
      <Time/>
      <FootballClub/>
      <Pet/>


    </div>
  );
}

export default App;
