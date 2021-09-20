import React, { useContext, useState, useEffect } from 'react'
import Head from 'next/head'

// Css
import { TictacPage, TictacTable, pencil, pencilTop, pencilRight, pencilCenter, pencilLeft, pencilBottom } from '../styles/Tictactoe.module.css'

// Context
import SettingsContext from '../data/context/context.jsx'

// Component
import Navbar from '../components/Navbar/index.jsx'
import Footer from '../components/Footer/index.jsx'
import TictacIndex from '../components/Tictactoe/index.jsx'

// Routes
import { Routes } from '../routes/index.js'


export const getStaticProps = async () => {
  return {
    props: {
      routes: Routes
    }, // will be passed to the page component as props
  }
}

const Tictactoe = ({ routes }) => {
  const { settings, setSettings} = useContext(SettingsContext)
  const [time, setTime] = useState('')


  useEffect(() => {
    ((settings.loser + settings.winner) === settings.plays) ? setSettings({...settings, start: false}) : setSettings({...settings, start: false, loser: settings.loser + 1});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function handlerDifficulty() {
    setSettings({...settings, difficulty: !settings.difficulty})
  }


  function handlerStart() {
    (settings.start) ? setSettings({...settings, start: !settings.start, loser: settings.loser+1}) : setSettings({...settings, start: !settings.start, plays: settings.plays+1})
  }


  function handlerFinishGame(win) {
    if (win) {
      (!settings.time) ? setSettings({...settings, time: !settings.time, winner: settings.winner+1}) : setSettings({...settings, time: !settings.time})
    } else {
      (!settings.time) ? setSettings({...settings, time: !settings.time, loser: settings.loser+1}) : setSettings({...settings, time: !settings.time})
    }
  }


  function handlerTime(value) {
    setTime(value)
  }


  function handlerClose() {
    setSettings({...settings, start: false, time: false})
  }


  return (
    <>
      <Head>
        <title>Game Room | Tic-tac-toe</title>
      </Head>
      <div className={TictacPage}>
        <Navbar startValue={settings.start} startChange={handlerStart} routes={routes} />
          <main className={TictacTable}>
            <div className={pencil}>
              <div className={pencilTop}></div>
              <div className={pencilLeft}></div>
              <div className={pencilCenter}></div>
              <div className={pencilRight}></div>
              <div className={pencilBottom}></div>
            </div>
            <TictacIndex settings={settings} timeNow={time} finishGame={(win) => handlerFinishGame(win)} close={() => handlerClose()} />
          </main>
        <Footer start={settings.start} timeOut={settings.time} timeNow={(value) => handlerTime(value)} difficultyChange={handlerDifficulty} difficultyValue={settings.difficulty} plays={settings.plays} loser={settings.loser} winner={settings.winner} />
      </div>
    </>
  )
}

export default Tictactoe