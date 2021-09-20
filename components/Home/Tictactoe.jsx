// Css
import { tictacPaper, tictac, tictacTableBody, tictacTableContainer, tictacCell, tictacTableSvg, tictacTableOX, active } from '../../styles/Tictactoe.module.css'

// Helpers
import TransitionHome from '../Helpers/TransitionHome'

const Tictac = ({ target }) => (
  <div className={[tictacPaper, (target === 1) ? active : ''].join(' ')} title="Tic-tac-toe game">
    <TransitionHome title="Tic-tac-toe"/>

    <div className={tictac}>
      <svg className={tictacTableSvg} ><path data-path="1" d="M108,83L6,83" strokeDashoffset="0" strokeDasharray="102" ></path><path data-path="2" d="M108,153L6,153" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="3" d="M108,83L210,83" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="4" d="M108,153L210,153" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="5" d="M73,118L73,16" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="6" d="M143,118L143,16" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="7" d="M73,118L73,220" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="8" d="M143,118L143,220" strokeDashoffset="0" strokeDasharray="102"></path></svg>
      <table className={tictacTableBody}>
        <tbody>
          <tr className={tictacTableContainer}>
            <td className={tictacCell}>
              <svg data-value="1" aria-label="X" role="img" viewBox="0 0 128 128" className={tictacTableOX} style={{visibility: 'visibility'}}><path d="M16,16L112,112" ></path><path d="M112,16L16,112" ></path></svg>
              <svg data-value="1" height="100" width="100" aria-label="O" role='img' className={tictacTableOX} style={{visibility: 'visibility'}}><circle cx="35" cy="35" r="25" strokeWidth="3" fill="none" /></svg>
            </td>
            <td className={tictacCell}>
              <svg data-value="2" aria-label="X" role="img" viewBox="0 0 128 128" className={tictacTableOX} style={{visibility: 'visibility'}}><path d="M16,16L112,112" ></path><path d="M112,16L16,112" ></path></svg>
              <svg data-value="2" height="100" width="100" aria-label="O" role='img' className={tictacTableOX} style={{visibility: 'visibility'}}><circle cx="35" cy="35" r="25" strokeWidth="3" fill="none" /></svg>
            </td>
            <td className={tictacCell}>
              <svg data-value="3" aria-label="X" role="img" viewBox="0 0 128 128" className={tictacTableOX} style={{visibility: 'visibility'}}><path d="M16,16L112,112" ></path><path d="M112,16L16,112" ></path></svg>
              <svg data-value="3" height="100" width="100" aria-label="O" role='img' className={tictacTableOX} style={{visibility: 'visibility'}}><circle cx="35" cy="35" r="25" strokeWidth="3" fill="none" /></svg>
            </td>
          </tr>
          <tr className={tictacTableContainer}>
            <td className={tictacCell}>
              <svg data-value="4" aria-label="X" role="img" viewBox="0 0 128 128" className={tictacTableOX} style={{visibility: 'visibility'}}><path d="M16,16L112,112" ></path><path d="M112,16L16,112" ></path></svg>
              <svg data-value="4" height="100" width="100" aria-label="O" role='img' className={tictacTableOX} style={{visibility: 'visibility'}}><circle cx="35" cy="35" r="25" strokeWidth="3" fill="none" /></svg>
            </td>
            <td className={tictacCell}>
              <svg data-value="5" aria-label="X" role="img" viewBox="0 0 128 128" className={tictacTableOX} style={{visibility: 'visibility'}}><path d="M16,16L112,112" ></path><path d="M112,16L16,112" ></path></svg>
              <svg data-value="5" height="100" width="100" aria-label="O" role='img' className={tictacTableOX} style={{visibility: 'visibility'}}><circle cx="35" cy="35" r="25" strokeWidth="3" fill="none" /></svg>
            </td>
            <td className={tictacCell}>
              <svg data-value="6" aria-label="X" role="img" viewBox="0 0 128 128" className={tictacTableOX} style={{visibility: 'visibility'}}><path d="M16,16L112,112" ></path><path d="M112,16L16,112" ></path></svg>
              <svg data-value="6" height="100" width="100" aria-label="O" role='img' className={tictacTableOX} style={{visibility: 'visibility'}}><circle cx="35" cy="35" r="25" strokeWidth="3" fill="none" /></svg>
            </td>
          </tr>
          <tr className={tictacTableContainer}>
            <td className={tictacCell}>
              <svg data-value="7" aria-label="X" role="img" viewBox="0 0 128 128" className={tictacTableOX} style={{visibility: 'visibility'}}><path d="M16,16L112,112" ></path><path d="M112,16L16,112" ></path></svg>
              <svg data-value="7" height="100" width="100" aria-label="O" role='img' className={tictacTableOX} style={{visibility: 'visibility'}}><circle cx="35" cy="35" r="25" strokeWidth="3" fill="none" /></svg>
            </td>
            <td className={tictacCell}>
              <svg data-value="8" aria-label="X" role="img" viewBox="0 0 128 128" className={tictacTableOX} style={{visibility: 'visibility'}}><path d="M16,16L112,112" ></path><path d="M112,16L16,112" ></path></svg>
              <svg data-value="8" height="100" width="100" aria-label="O" role='img' className={tictacTableOX} style={{visibility: 'visibility'}}><circle cx="35" cy="35" r="25" strokeWidth="3" fill="none" /></svg>
            </td>
            <td className={tictacCell}>
              <svg data-value="9" aria-label="X" role="img" viewBox="0 0 128 128" className={tictacTableOX} style={{visibility: 'visibility'}}><path d="M16,16L112,112" ></path><path d="M112,16L16,112" ></path></svg>
              <svg data-value="9" height="100" width="100" aria-label="O" role='img' className={tictacTableOX} style={{visibility: 'visibility'}}><circle cx="35" cy="35" r="25" strokeWidth="3" fill="none" /></svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
)

export default Tictac