import { useCallback, useEffect, useState } from 'react'

// Css
import { tableUl, hard } from '../../styles/Memory.module.css'

// Data
// import dataMemory from '../../data/memory.json'

// Components
import MemoryLi from './MemoryLi'

// helpers
import Alert from '../Helpers/Alert'
import { randomPosition } from '../Helpers/Function'




function MemoryUl({ settings, finishGame, dataMemory }) {
  const [dataAll, setDataAll] = useState([]);
  const [card, setCard] = useState([]);
  const [cardFlipped, setCardFlipped] = useState([]);
  const [moves, setMoves] = useState(0);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (!settings.start) {

      (card.length > 0 || cardFlipped.length > 0)
      ?
      (
        setCard([]),
        setCardFlipped([])
        )
        :
        null


        if (settings.difficulty && dataAll.length === 0 || settings.difficulty && dataAll.length === 50) {
          setDataAll([])
        setDataAll(randomPosition([...dataMemory.slice(0, 10), ...dataMemory.slice(0, 10)]))
      } else if (!settings.difficulty && dataAll.length === 0 || !settings.difficulty && dataAll.length === 20) {
        setDataAll([])
        setDataAll(randomPosition([...dataMemory, ...dataMemory]))
      } else if (settings.difficulty && dataAll.length === 20 && moves > 0) {
        setDataAll([])
        setMoves(0)
        setDataAll(randomPosition([...dataMemory.slice(0, 10), ...dataMemory.slice(0, 10)]))
      } else if (!settings.difficulty && dataAll.length === 50 && moves > 0) {
        setDataAll([])
        setMoves(0)
        setDataAll(randomPosition([...dataMemory, ...dataMemory]))
      }
    } else {
      if (card.length == 2 || card.length > 2) {
        if (dataAll[card[0]].value === dataAll[card[1]].value && dataAll[card[0]].id === dataAll[card[1]].id) {
          if (dataAll.length === (cardFlipped.length + 2)) {
            finishGame(moves)
          }
          setCard([])
          return setCardFlipped([...cardFlipped, card[0], card[1]])
        }

        setTimeout(() => {
          return setCard([])
        }, 500);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.difficulty, settings.start, card, dataAll, cardFlipped, finishGame, moves])


  const cardMemory = useCallback( (index) => {
    if (settings.start) {
      if (card.length === 0) {
        setMoves(moves + 1)
        return setCard([index])
      } else if (index === card[0]) {
        return null
      }

      return setCard([...card, index])
    } else {
      if (!alert) {
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 4000);
      }
    }
    }, [card, settings.start, alert, moves])


  return (
    <ul className={[tableUl, (!settings.difficulty) ? hard : ''].join(' ')}>
      <Alert message={'please, press start button'} visibility={alert} bg={'#ff21219c'} />
      {
        (settings.difficulty) ?

          dataAll.map( (value, index) => (
            <MemoryLi index={index} value={value.value} cardFlipped={cardFlipped} cardSelect={card} setCard={(index) => cardMemory(index)} key={`${value.id}normal${index}`}/>
          ))

        :

          dataAll.map( (value, index) => (
            <MemoryLi index={index} value={value.value} cardFlipped={cardFlipped} cardSelect={card} setCard={(index) => cardMemory(index)} key={`${value.id}hard${index}`}/>
          ))
      }
    </ul>
  )
}

export default MemoryUl
