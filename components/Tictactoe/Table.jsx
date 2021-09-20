import React, { useEffect, useState } from 'react'

// Component
import TableTr from './TableTr'
import { playComputer, playInline } from './logicGame';

// Helpers
import Alert from '../Helpers/Alert';

// Css
import { tictac, tictacTableBody, tictacTableContainer, tictacTableSvg, tictacTableLineSvg, active } from '../../styles/Tictactoe.module.css'


let tbody = {
  tr1: [ 1, 2, 3 ],
  tr2: [ 4, 5, 6 ],
  tr3: [ 7, 8, 9 ]
}


const TictacTable = ({ settings, statusNow, handlerDraw, finishGame }) => {
  const [status, setStatus] = useState({
    tableAll: [],
    tableO: [],
    tableX: [],
    moves: 0,
    games: 1,
    lineFinish: ''
  })
  const [alert, setAlert] = useState(false)


  useEffect(() => {
    if (!settings.start) {
      if (status.tableAll.length !== 0) {
        statusNow({tableAll: [], tableO: [], tableX: [], moves: 0, games: 1, lineFinish: ''})
        setStatus({tableAll: [], tableO: [], tableX: [], moves: 0, games: 1, lineFinish: ''})
      }
    } else {
      if (status.tableAll.length === 9) {
        if (playInline(status)) {
          return changeLineFinish(playInline(status))
        } else {
          handlerDraw()
          return setTimeout(() => {
            statusNow({tableAll: [], tableO: [], tableX: [], moves: status.moves, games: status.games + 1, lineFinish: ''})
            setStatus({tableAll: [], tableO: [], tableX: [], moves: status.moves, games: status.games + 1, lineFinish: ''})
          }, 2000);
        }
      } else {
        if (settings.difficulty) {
          if (status.tableAll.length % 2 !== 0) {
            let play;

            if (playInline(status)) {
              return changeLineFinish(playInline(status));
            }

            play = playComputer(false, status)
            setStatus(play);

            if (playInline(play)) {
              return changeLineFinish(playInline(play), play);
            }
          }
        } else {
          if (status.tableAll.length % 2 === 0) {
            let play;

            if (playInline(status)) {
              return changeLineFinish(playInline(status));
            }

            play = playComputer(true, status)
            setStatus(play);

            if (playInline(play)) {
              return changeLineFinish(playInline(play), play);
            }
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.start, status.tableAll])


  function changeLineFinish(value, play) {
    setStatus({...status, ...play,  lineFinish: value[0]})
    if (settings.difficulty) {
      if (value[1].toUpperCase() === 'X') {
        statusNow({...status, ...play, lineFinish: value[0]})
        return finishGame(true)
      } else {
        statusNow({...status, ...play, lineFinish: value[0]})
        return finishGame(false)
      }
    } else {
      if (value[1].toUpperCase() === 'O') {
        statusNow({...status, ...play, lineFinish: value[0]})
        return finishGame(true)
      } else {
        statusNow({...status, ...play, lineFinish: value[0]})
        return finishGame(false)
      }
    }
  }


  function handlerClick(value) {
    if (settings.start) {
      if (!status.tableAll.some(element => element === value)) {
        (settings.difficulty)
        ?
          setStatus({...status, tableX: [...status.tableX, value], tableAll: [...status.tableAll, value], moves: status.moves + 1})
        :
          setStatus({...status, tableO: [...status.tableO, value], tableAll: [...status.tableAll, value], moves: status.moves + 1})
      }
    } else {
      if (!alert) {
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 4000);
      }
    }
  }


  return (
    <div className={tictac}>
      <Alert message={'please, press start button'} visibility={alert} bg={'#ff21219c'} />
      <svg className={tictacTableSvg} ><path data-path="1" d="M108,83L6,83" strokeDashoffset="0" strokeDasharray="102" ></path><path data-path="2" d="M108,153L6,153" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="3" d="M108,83L210,83" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="4" d="M108,153L210,153" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="5" d="M73,118L73,16" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="6" d="M143,118L143,16" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="7" d="M73,118L73,220" strokeDashoffset="0" strokeDasharray="102"></path><path data-path="8" d="M143,118L143,220" strokeDashoffset="0" strokeDasharray="102"></path></svg>
      <svg className={tictacTableLineSvg} height="216" width="216">
        {/* diagonal */}
        <line x1="0" y1="0" x2="216" y2="216" strokeWidth={2} className={(status.lineFinish === '159') ? active : ''} />
        <line x1="0" y1="216" x2="216" y2="0" strokeWidth={2} className={(status.lineFinish === '357') ? active : ''} />
        {/* vertical */}
        <line x1="0" y1="40" x2="216" y2="40" strokeWidth={2} className={(status.lineFinish === '123') ? active : ''}/>
        <line x1="0" y1="110" x2="216" y2="110" strokeWidth={2} className={(status.lineFinish === '456') ? active : ''}/>
        <line x1="0" y1="175" x2="216" y2="175" strokeWidth={2} className={(status.lineFinish === '789') ? active : ''} />
        {/* horizontal */}
        <line x1="108" y1="216" x2="108" y2="0" strokeWidth={2} className={(status.lineFinish === '258') ? active : ''}/>
        <line x1="40" y1="216" x2="40" y2="0" strokeWidth={2} className={(status.lineFinish === '147') ? active : ''} />
        <line x1="180" y1="216" x2="180" y2="0" strokeWidth={2} className={(status.lineFinish === '369') ? active : ''}/>
      </svg>
      <table className={tictacTableBody}>
        <tbody>
          <tr className={tictacTableContainer}>
            {
              tbody.tr1.map( (value, index) => (
              <TableTr key={`${value}${index}`} value={value} tableAll={status.tableAll} tableO={status.tableO} tableX={status.tableX} handlerClick={(value) => handlerClick(value)} />
              ))
            }
          </tr>
          <tr className={tictacTableContainer}>

            {
              tbody.tr2.map( (value, index) => (
              <TableTr key={`${value}${index}`} value={value} tableAll={status.tableAll} tableO={status.tableO} tableX={status.tableX} handlerClick={(value) => handlerClick(value)} />
              ))
            }
          </tr>
          <tr className={tictacTableContainer}>
            {
              tbody.tr3.map( (value, index) => (
              <TableTr key={`${value}${index}`} value={value} tableAll={status.tableAll} tableO={status.tableO} tableX={status.tableX} handlerClick={(value) => handlerClick(value)} />
              ))
            }
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TictacTable