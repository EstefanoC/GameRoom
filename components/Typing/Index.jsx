import React, { useState, useEffect } from 'react'

// Components
import TypingWords from './TypingWords'
import TypingInput from './TypingInput'

// Helpers
import Modal from '../Helpers/Modal'

// Css
import { TypingContent } from '../../styles/Typing.module.css'


const IndexTyping = ({ settings, timeNow, finishGame, close, dataWords }) => {
  const [visibilityModal, setVisibilityModal] = useState(false)
  const [word, setWord] = useState('')
  const [time, setTime] = useState('')
  const [status, setStatus] = useState({})


  useEffect(() => {
    if (status.wordsIndex > 0 && timeNow != '') {
      calculateWPM(status.wordsIndex, timeNow)
      setVisibilityModal(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.winner, timeNow])


  function handlerFinishGame() {
    finishGame()
  }


  function handlerClose() {
    setVisibilityModal(false)
    close()
  }

  function calculateWPM(words, time) {
    let t = time.split(':');
    setTime(Math.round(words/Number(t[0] * 60 + (+t[1]))* 60));
  }


  return (
    <div className={TypingContent}>
      <TypingWords settings={settings} setWordNow={(value) => setWord(value)} statusNow={status} finishGame={() => handlerFinishGame()} dataWords={dataWords} />
      <TypingInput settings={settings} wordNow={word} statusNow={(value) => setStatus(value)} />
      <Modal game={'typing'} message={(status.failed < status.success && settings.difficulty && Number(timeNow.slice(0, 2)) < 1 || status.failed < status.success && !settings.difficulty && Number(timeNow.slice(0, 2)) < 2) ? 'You are very fast' : 'You can do it better than this'} difficulty={settings.difficulty} moves={undefined} typing={status.typing} success={status.success} failed={status.failed} wpm={time} time={timeNow} visibility={visibilityModal} close={() => handlerClose()} />
    </div>
  )
}

export default IndexTyping