import { useState, useEffect } from 'react'

// Component
import MemoryUl from './MemoryUl'

// Helpers
import Modal from '../Helpers/Modal'


const Memory = ({ settings, timeNow, finishGame, close, dataMemory }) => {
  const [visibilityModal, setVisibilityModal] = useState(false)
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    if (moves > 0 && timeNow != '') {
      setVisibilityModal(true)
    }
  }, [settings.winner, timeNow, moves])


  function handlerFinishGame(valueMove) {
    setMoves(valueMove);
    finishGame()
  }

  function handlerClose() {
    setVisibilityModal(false)
    close()
  }

  return (
    <>
      <MemoryUl settings={settings} finishGame={(moves) => handlerFinishGame(moves)} dataMemory={dataMemory} />
      <Modal game={'memory'} message={(moves < 40 && settings.difficulty && Number(timeNow.slice(0, 2)) < 1 || moves < 100 && !settings.difficulty && Number(timeNow.slice(0, 2)) < 3) ? 'You have a good memory' : 'You can do it better than this'} difficulty={settings.difficulty} moves={moves} time={timeNow} visibility={visibilityModal} close={() => handlerClose()} />
    </>
  )
}

export default Memory
