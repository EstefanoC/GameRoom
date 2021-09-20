// Component
import Difficulty from './Difficulty'
import Time from './Time'
import Counter from './Counter'

// Css
import { footer } from '../../styles/Footer.module.css'


const Footer = ({ plays = '0', loser = '0', winner = '0', start, timeOut, timeNow, difficultyChange, difficultyValue }) => (
  <div className={footer}>

    <Time start={start} timeOut={timeOut} timeNow={(value) => timeNow(value)}/>

    <Difficulty start={start} value={difficultyValue} change={() => difficultyChange()}/>

    <Counter plays={plays} loser={loser} winner={winner}/>

  </div>
)

export default Footer
