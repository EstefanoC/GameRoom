// Css
import { startGame, startGameText } from '../../styles/Navbar.module.css'


const StartGame = ({ value, handlerStart }) => (
  <div className={startGame} onClick={handlerStart} >
    <span className={startGameText}>{(!value) ? 'START' : 'GIVE UP'}</span>
  </div>
)

export default StartGame
