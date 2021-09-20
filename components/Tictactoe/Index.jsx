import React, { useState, useEffect } from 'react'

// Components
import TictacTable from './Table'

// Helpers
import Modal from '../Helpers/Modal'

// Css
import { TictacContent, TictacTitle, active } from '../../styles/Tictactoe.module.css'


const IndexTictac = ({ settings, timeNow, finishGame, close }) => {
  const [visibilityModal, setVisibilityModal] = useState(false)
  const [status, setStatus] = useState({})
  const [draw, setDraw] = useState(false)
  const [win, setWin] = useState(false)


  useEffect(() => {
    if (status.moves > 0 && status.lineFinish != '' && timeNow != '') {
    setVisibilityModal(true)
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.winner, settings.loser, timeNow, status.moves])


  function handlerFinishGame(win) {
    setWin(win)
    finishGame(win)
  }

  function handlerDraw() {
    if (!draw) {
      setDraw(true)
      setTimeout(() => {
        setDraw(false)
      }, 2000);
    }
  }

  function handlerClose() {
    setVisibilityModal(false)
    close()
  }


  return (
    <div className={TictacContent}>
      <h2 className={[TictacTitle, (draw ) ? active : ''].join(' ')}>DRAW</h2>
      <TictacTable settings={settings} statusNow={(statusNow) => setStatus(statusNow)} handlerDraw={() => handlerDraw()} finishGame={(win) => handlerFinishGame(win)} />
      <Modal game={'Tic-tac-toe'} message={(win) ? 'You are king of the Tic-tac-toe' : 'You can do it better than this'} difficulty={settings.difficulty} moves={status.moves} games={status.games} wpm={undefined} time={timeNow} visibility={visibilityModal} close={() => handlerClose()} />
    </div>
  )
}

export default IndexTictac