import { useEffect, useState } from 'react'

// Css
import { tableUl, hard } from '../../styles/Country.module.css'

// Components
import CountryLi from './CountryLi'

// helpers
import Alert from '../Helpers/Alert'
import { randomPosition, randomOnePosition } from '../Helpers/Function'


const normalDifficulty = 20
const hardDifficulty = 50


function CountryUl({ settings, setCountryName, setOpportunityNow, finishGame, dataCountry }) {
  const [dataAll, setDataAll] = useState([])
  const [status, setStatus] = useState({
    countryNow: {},
    opportunity: 5,
    countryAll: [],
    failed: 0,
    success: 0,
    attempts: 0
  })
  const [alert, setAlert] = useState(false)


  useEffect(() => {
    if (!settings.start) {
      let dataTemporal;

      if (settings.difficulty && dataAll.length === 0 || settings.difficulty && dataAll.length === hardDifficulty) {
        setOpportunityNow(5)
        setCountryName('')
        setStatus({...status, opportunity: 5, countryNow: {}, countryAll: [], failed: 0, success: 0, attempts: 0})
        dataTemporal = randomPosition(dataCountry)
        setDataAll(dataTemporal.slice(0, Number(normalDifficulty)))
      } else if (!settings.difficulty && dataAll.length === 0 || !settings.difficulty && dataAll.length === normalDifficulty) {
        setOpportunityNow(3)
        setCountryName('')
        setStatus({...status, opportunity: 3, countryNow: {}, countryAll: [], failed: 0, success: 0, attempts: 0})
        dataTemporal = randomPosition(dataCountry)
        setDataAll(dataTemporal.slice(0, Number(hardDifficulty)))
      } else if (settings.difficulty && dataAll.length === normalDifficulty && status.attempts > 0) {
        setOpportunityNow(5)
        setCountryName('')
        setStatus({...status, opportunity: 5, countryNow: {}, countryAll: [], failed: 0, success: 0, attempts: 0})
        dataTemporal = randomPosition(dataCountry)
        setDataAll(dataTemporal.slice(0, Number(normalDifficulty)))
      } else if (!settings.difficulty && dataAll.length === hardDifficulty && status.attempts > 0) {
        setOpportunityNow(3)
        setCountryName('')
        setStatus({...status, opportunity: 3, countryNow: {}, countryAll: [], failed: 0, success: 0, attempts: 0})
        dataTemporal = randomPosition(dataCountry)
        setDataAll(dataTemporal.slice(0, Number(hardDifficulty)))
      }
    } else {
      if (dataAll.length === status.countryAll.length || dataAll.length < status.countryAll.length) {
        finishGame(status)
      } else if (status.countryNow.name === undefined) {
        let country = dataAll[randomOnePosition(dataAll)]
        setStatus({...status, countryNow: country})
        setCountryName(country.name)
      }
    }


    return () => {
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.difficulty, settings.start, dataAll, status.countryAll])



  const HandlerClick = (name) => {
    if (settings.start) {
      let opportunity;
      let country;

      if (name === status.countryNow.name) {
        if ((dataAll.length - 1) === status.countryAll.length) {
          (settings.difficulty) ? opportunity = 5 : opportunity = 3

          setOpportunityNow(opportunity)
          setCountryName('')
          setStatus({...status, countryNow: '', countryAll: [...status.countryAll, name], opportunity: opportunity, success: status.success + 1, attempts: status.attempts + 1})
        } else {
          do {
            country = dataAll[randomOnePosition(dataAll)]
          } while ([...status.countryAll, name].some(element => element === country.name));

          (settings.difficulty) ? opportunity = 5 : opportunity = 3

          setOpportunityNow(opportunity)
          setCountryName(country.name)
          setStatus({...status, countryNow: country, countryAll: [...status.countryAll, name], opportunity: opportunity, success: status.success + 1, attempts: status.attempts + 1})
        }
      } else {
        let countryEqual = false

        status.countryAll.forEach(element => {
          if (name === element) {
            return countryEqual = true;
          }
        });

        if (status.opportunity === 1 && !countryEqual) {
          if ((dataAll.length - 1) === status.countryAll.length) {
            (settings.difficulty) ? opportunity = 5 : opportunity = 3

            setOpportunityNow(opportunity)
            setCountryName('')
            setStatus({...status, countryNow: '', countryAll: [...status.countryAll, name], opportunity: opportunity, success: status.success + 1, attempts: status.attempts + 1})
          } else {
            do {
              country = dataAll[randomOnePosition(dataAll)]
            } while ([...status.countryAll, name].some(element => element === country.name));

            (settings.difficulty) ? opportunity = 5 : opportunity = 3

            setOpportunityNow(opportunity)
            setCountryName(country.name)
            setStatus({...status, countryNow: country, countryAll: [...status.countryAll, status.countryNow.name], opportunity: opportunity, failed: status.failed + 1, attempts: status.attempts + 1})
          }

        }else if (!countryEqual) {
          setOpportunityNow(status.opportunity - 1)
          setStatus({...status, opportunity: status.opportunity - 1, attempts: status.attempts + 1})
        }
      }
    } else {
      if (!alert) {
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 4000);
      }
    }
  }


  return (
    <ul className={[tableUl, (!settings.difficulty) ? hard : ''].join(' ')} title={(status.countryNow.name) ? `select ${status.countryNow.name}` : ''}>
      <Alert message={'please, press start button'} visibility={alert} bg={'#ff21219c'} />
      {
        (settings.difficulty) ?

          dataAll.map( (value, index) => (
            <CountryLi name={value.name} code={value.code} countryNow={status.countryNow} countrySelect={status.countryAll} handlerClick={(name) => HandlerClick(name)} key={`${value.name}normal${index}`}/>
          ))

        :

          dataAll.map( (value, index) => (
            <CountryLi name={value.name} code={value.code} countryNow={status.countryNow} countrySelect={status.countryAll} handlerClick={(name) => HandlerClick(name)} key={`${value.name}hard${index}`}/>
          ))
      }
    </ul>
  )
}

export default CountryUl