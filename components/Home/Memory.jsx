// Css
import { memoryTable, tableUl, cardMemory, backCard, containerBackCard, TextBackCard, frontCard, containerFrontCard, contentFrontCard, containerFrontCardDetail, active } from '../../styles/Memory.module.css'

// Helpers
import TransitionHome from '../Helpers/TransitionHome'


const Memory = ({ target, dataMemory }) => (
  <div className={[memoryTable, (target === 0) ? active : ''].join(' ')} title="Memory game">
    <TransitionHome title="memory"/>

    <ul className={tableUl}>
      {
      dataMemory.slice(0, 10).map( (value, index) => (
        <li className={cardMemory} key={`${value.id}${index}`}>
          <div className={backCard}>
            <div className={containerBackCard}>
              <div className={containerFrontCardDetail}></div>
              <h2 className={TextBackCard}>memory</h2>
            </div>
          </div>
          <div className={frontCard}>
            <div className={containerFrontCard}>
              <strong className={contentFrontCard}>{value.value}</strong>
            </div>
          </div>
        </li>
      ))
      }
    </ul>

  </div>
)

export default Memory
