import React, { createRef, useEffect, useState } from 'react'

// Css
import { TypingWords as container, TypingSmall, TypingWordsBg, TypingWordsContainer, TypingWordsOverflow } from '../../styles/Typing.module.css'

// Component
import SpanWords from './SpanWords'

// Helpers
import { randomPosition } from '../Helpers/Function'


const normalDifficulty = 35
const hardDifficulty = 70


const TypingWords = ({ settings, setWordNow, statusNow, finishGame, dataWords }) => {
  const [dataAll, setDataAll] = useState([]);
  const [word, setWord] = useState('');
  const [positionX, setPositionX] = useState([0, 0]);


  const refSpan = React.useRef([]);


  useEffect(() => {
    if (!settings.start) {
      let dataTemporal;

      setWord('')
      setWordNow('')


      if (settings.difficulty && dataAll.length === 0 || settings.difficulty && dataAll.length === hardDifficulty) {
        dataTemporal = randomPosition(dataWords)
        setPositionX([window.innerWidth, 0])
        setDataAll(dataTemporal.slice(0, Number(normalDifficulty)))
        refSpan.current = dataTemporal.slice(0, Number(normalDifficulty)).map((_, i) => refSpan.current[i] ?? createRef());
      } else if (!settings.difficulty && dataAll.length === 0 || !settings.difficulty && dataAll.length === normalDifficulty) {
        dataTemporal = randomPosition(dataWords)
        setPositionX([window.innerWidth, 0])
        setDataAll(dataTemporal.slice(0, Number(hardDifficulty)))
        refSpan.current = dataTemporal.slice(0, Number(hardDifficulty)).map((_, i) => refSpan.current[i] ?? createRef());
      } else if (settings.difficulty && dataAll.length === normalDifficulty) {
        dataTemporal = randomPosition(dataWords)
        setPositionX([window.innerWidth, 0])
        setDataAll(dataTemporal.slice(0, Number(normalDifficulty)))
        refSpan.current = dataTemporal.slice(0, Number(normalDifficulty)).map((_, i) => refSpan.current[i] ?? createRef());
      } else if (!settings.difficulty && dataAll.length === hardDifficulty) {
        dataTemporal = randomPosition(dataWords)
        setPositionX([window.innerWidth, 0])
        setDataAll(dataTemporal.slice(0, Number(hardDifficulty)))
        refSpan.current = dataTemporal.slice(0, Number(hardDifficulty)).map((_, i) => refSpan.current[i] ?? createRef());
      }
    } else {
      if (word.length === 0) {
        setWordNow(dataAll[0])
        return setWord(dataAll[0])
      } else if ( dataAll.length === Number(statusNow.wordsIndex) || Number(statusNow.wordsIndex) > dataAll.length ) {
      if (statusNow.status === true || statusNow.status === false) {
        return null
      } else {
        return finishGame()
        }
      } else if (statusNow.status === undefined) {
        let widthTotal = 0

        refSpan.current.forEach((value, i) => {
          if (refSpan.current[i].current.style.opacity === '0.5') {
            widthTotal = widthTotal + value.current.offsetWidth
          } else if (refSpan.current[i] === refSpan.current[refSpan.current.length - 1]) {
            translateX(widthTotal)
          }
        });
      }

      setWordNow(dataAll[statusNow.wordsIndex])
      setWord(dataAll[statusNow.wordsIndex])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.difficulty, settings.start, statusNow, refSpan.current[0]])


  function translateX(value) {
    setPositionX([positionX[0], value])
  }


  return (
    <div className={container}>
      <small className={TypingSmall}>{(settings.difficulty) ? normalDifficulty.toString() : hardDifficulty.toString()} words</small>
      <div className={TypingWordsBg}>
        <div className={TypingWordsOverflow}>
          <div className={TypingWordsContainer} style={{transform: `translate(calc(${positionX[0] > 800 ? '40vw' : '20vw'} - (${positionX[1]}px + ${(statusNow.wordsIndex != undefined) ? statusNow.wordsIndex : 0}rem )), -50%)`}}>
            {dataAll.map( (value, i) => <SpanWords value={value.word} key={value.id} start={settings.start} target={word.word} status={statusNow.status} ref={refSpan.current[i]} />)}
          </div>
        </div>
      </div>
    </div>
  )
}


export default TypingWords