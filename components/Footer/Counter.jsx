// Css
import { counter, counterPlays, counterPlaysNumber, counterLoser, counterLoserNumber, counterWinner, counterWinNumber } from '../../styles/Footer.module.css'


const Counter = ({ plays, loser, winner }) => (
  <div className={counter}>

    <div className={counterPlays}>
      Plays: <span className={counterPlaysNumber}>{plays} 🎮</span>
    </div>

    <div className={counterLoser}>
      Loser: <span className={counterLoserNumber}>{loser} ❌</span>
    </div>

    <div className={counterWinner}>
      Winner: <span className={counterWinNumber}>{winner} 🏆</span>
    </div>

  </div>
)

export default Counter
