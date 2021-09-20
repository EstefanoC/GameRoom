import { useEffect, useState } from 'react';


// Css
import { modalBack, modalBackShow,  modalContainer, modalContainerShow, modalTitle, modalResult, modalDifficulty, modalTime, modalFlexPrimary, modalFlexSecondary, modalMessage } from '../../styles/Helpers.module.css';


const Modal = ({ time, moves, typing, success, failed, wpm, games, difficulty, game, message, visibility, close }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    (visibility) ? setShow(true) : setShow(false)
  }, [visibility])

  function handleClose() {
    setShow(false)
    close()
  }


  return (
    <>
      <div className={[modalBack, (show) ? modalBackShow : ''].join(' ')} onClick={() => handleClose()} />
      <div className={[modalContainer, (show) ? modalContainerShow : ''].join(' ')}>

        <h1 className={modalTitle}>Result of {game} game</h1>

        <div className={modalResult}>
          <div className={modalFlexPrimary}>
            <p className={modalDifficulty}>Difficulty: <span>{(difficulty) ? 'normal' : 'hard'}</span></p>
            <p className={modalTime}>Final time: <span>{time}</span></p>
          </div>
          <div className={modalFlexSecondary}>
            {(moves != undefined) ? <p>Your moves: <span>{moves}</span></p> : null}
            {(typing != undefined) ? <p>Your typing: <span>{typing}</span></p> : null}
            {(success != undefined) ? <p>Success {(game === 'country') ? 'countries' : 'words' }: <span>{success}</span></p> : null}
            {(failed != undefined) ? <p>Failed {(game === 'country') ? 'countries' : 'words' }: <span>{failed}</span></p> : null}
            {(wpm != undefined) ? <p>Words per minute (wpm): <span>{wpm}</span></p> : null}
            {(games != undefined) ? <p>games: <span>{games}</span></p> : null}
          </div>
        </div>
        <p className={modalMessage}>{message}</p>

      </div>
    </>
  )
}

export default Modal
