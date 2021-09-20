import { useContext, useState, useEffect } from 'react'
import Head from 'next/head'

// Css
import { CountryPage, CountryTable, sun, floor, mountain1, mountain2, cloudFirst, cloudSecond, cloudThird, cloud  } from '../styles/Country.module.css'

// Context
import SettingsContext from '../data/context/context.jsx'

// Component
import Navbar from '../components/Navbar/index.jsx'
import Footer from '../components/Footer/index.jsx'
import CountryIndex from '../components/Country/index.jsx'

// Routes / Data
import { Routes } from '../routes/index.js'
import dataCountry from '../data/country.json'

export const getStaticProps = async () => {
  return {
    props: {
      routes: Routes,
      dataCountry
    }, // will be passed to the page component as props
  }
}

const Country = ({ routes, dataCountry }) => {
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
        <title>Game Room | country</title>
      </Head>
      <div className={CountryPage}>
        <Navbar startValue={settings.start} startChange={handlerStart} routes={routes} />
          <main className={CountryTable}>
            <div className={sun}></div>

            <div className={cloudFirst}>
              <div className={cloud}></div>
            </div>

            <div className={cloudSecond}>
              <div className={cloud}></div>
            </div>

            <div className={cloudThird}>
              <div className={cloud}></div>
            </div>

            <div className={floor}>
              <div className={mountain1}></div>
              <div className={mountain2}></div>
            </div>

            <CountryIndex settings={settings} timeNow={time} finishGame={() => handlerFinishGame()} close={() => handlerClose()} dataCountry={dataCountry}/>

          </main>
        <Footer start={settings.start} timeOut={settings.time} timeNow={(value) => handlerTime(value)} difficultyChange={handlerDifficulty} difficultyValue={settings.difficulty} plays={settings.plays} loser={settings.loser} winner={settings.winner} />
      </div>
    </>
  )
}

export default Country