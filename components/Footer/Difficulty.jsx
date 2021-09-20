// Css
import { difficulty, difficultyDisabled, difficultySpan, difficultyActive, difficultyContainer, difficultyInput, difficultyWrap, difficultyLabel, difficultyRib } from '../../styles/Footer.module.css'


const Difficulty = ({ start, value, change }) => (
  <div className={[difficulty, (start) ? difficultyDisabled : ''].join(' ')}>
    <span className={[difficultySpan, (value) ? difficultyActive : ''].join(' ')}>Hard</span>
    <div className={difficultyContainer} onChange={change}>
      <input type="checkbox" id="difficulty" className={difficultyInput} defaultChecked={value} disabled={start} />
      <div className={difficultyWrap}>
        <label htmlFor="difficulty" className={difficultyLabel}>
          <span className={difficultyRib}></span>
          <span className={difficultyRib}></span>
          <span className={difficultyRib}></span>
        </label>
      </div>
    </div>
    <span className={[difficultySpan, (!value) ? difficultyActive : ''].join(' ')}>Normal</span>
  </div>
)

export default Difficulty
