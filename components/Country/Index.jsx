import { useState, useEffect } from 'react'

// Component
import CountryUl from './CountryUl'

// Helpers
import Modal from '../Helpers/Modal'

// Css
import { CountryContent, CountryHeader, CountryTitle, CountryTitle2, CountryTitleSpan } from '../../styles/Country.module.css'


const Country = ({ settings, timeNow, finishGame, close, dataCountry }) => {
  const [visibilityModal, setVisibilityModal] = useState(false)
  const [countryNow, setCountryNow] = useState('')
  const [opportunity, setOpportunity] = useState(5)
  const [status, setStatus] = useState({})

  useEffect(() => {
    if (status.attempts > 0 && timeNow != '') {
      setVisibilityModal(true)
    }
  }, [settings.winner, timeNow, status])


  function handlerFinishGame(status) {
    setStatus(status);
    finishGame()
  }

  function handlerClose() {
    setVisibilityModal(false)
    close()
  }

  return (
    <div className={CountryContent}>
      <div className={CountryHeader}>
        <h2 className={CountryTitle}>Select the country: <span className={CountryTitleSpan}>{countryNow}</span></h2>
        <h3 className={CountryTitle2}>Opportunity: {opportunity}</h3>
      </div>
      <CountryUl settings={settings} finishGame={(status) => handlerFinishGame(status)} setCountryName={(name) => setCountryNow(name)} setOpportunityNow={(value) => setOpportunity(value)} dataCountry={dataCountry}/>
      <Modal game={'country'} message={(status.attempts <= 35 && settings.difficulty && Number(timeNow.slice(0, 2)) < 2 || status.attempts <= 80 && !settings.difficulty && Number(timeNow.slice(0, 2)) < 5) ? 'You know too much about flags of countries' : 'You can do it better than this'} difficulty={settings.difficulty} moves={status.attempts} success={status.success} failed={status.failed} time={timeNow} visibility={visibilityModal} close={() => handlerClose()} />
    </div>
  )
}

export default Country