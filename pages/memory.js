import React, { useContext, useState, useEffect } from 'react'
import Head from 'next/head'

// Css
import { memoryPage, memoryTable } from '../styles/Memory.module.css'

// Context
import SettingsContext from '../data/context/context'

// Component
import Navbar from '../components/Navbar/index.jsx'
import Footer from '../components/Footer/index.jsx'
import MemoryIndex from '../components/Memory/index.jsx'

// Routes / Data
import { Routes } from '../routes/index.js'
import dataMemory from '../data/memory.json'


export const getStaticProps = async () => {
  return {
    props: {
      routes: Routes,
      dataMemory
    }, // will be passed to the page component as props
  }
}


const Memory = ({ routes, dataMemory }) => {
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

  function handlerFinishGame() {
    (!settings.time) ? setSettings({...settings, time: !settings.time, winner: settings.winner+1}) : setSettings({...settings, time: !settings.time})
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
        <title>Game Room | Memory</title>
      </Head>
      <div className={memoryPage}>
        <Navbar startValue={settings.start} startChange={handlerStart} routes={routes} />
          <main className={memoryTable}>
            <MemoryIndex settings={settings} timeNow={time} finishGame={() => handlerFinishGame()} close={() => handlerClose()} dataMemory={dataMemory} />
          </main>
        <Footer start={settings.start} timeOut={settings.time} timeNow={(value) => handlerTime(value)} difficultyChange={handlerDifficulty} difficultyValue={settings.difficulty} plays={settings.plays} loser={settings.loser} winner={settings.winner} />
      </div>
    </>
  )
}

export default Memory
