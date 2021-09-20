import React, { useEffect, useState } from 'react'

// Css
import { tictacCell, tictacTableOX, cancelX, cancelO } from '../../styles/Tictactoe.module.css'


const TableTr = ({ value, handlerClick, tableAll, tableX, tableO }) => {
  const [visibility, setVisibility] = useState([false, false])

  useEffect(() => {
    if (tableAll.length !== 0) {
      if (tableX.some(element => element === value)) {
        setVisibility([true, false])
      }
      if (tableO.some(element => element === value)) {
        setVisibility([false, true])
      }
    } else {
      setVisibility([false, false])
    }
    return () => {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableAll.length])

  return (
    <td className={[tictacCell, (visibility[0]) ? cancelX : '', (visibility[1]) ? cancelO : ''].join(' ')} onClick={() => handlerClick(value)}>
      <svg data-value={value} aria-label="X" role="img" viewBox="0 0 128 128" className={tictacTableOX} style={{visibility: `${visibility[0] ? 'visible' : 'hidden'}`}}><path d="M16,16L112,112" ></path><path d="M112,16L16,112" ></path></svg>
      <svg data-value={value} height="100" width="100" aria-label="O" role='img' className={tictacTableOX} style={{visibility: `${visibility[1] ? 'visible' : 'hidden'}`}}><circle cx="35" cy="35" r="25" strokeWidth="3" fill="none" /></svg>
    </td>
  )
}

export default TableTr