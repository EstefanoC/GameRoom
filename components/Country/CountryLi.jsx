import { useState, useEffect } from 'react';

// React Country Flags
import ReactCountryFlag from "react-country-flag";

// Css
import { cardCountry, active, failed } from '../../styles/Country.module.css'


const CountryLi = ({ name, code, handlerClick, countrySelect, countryNow }) => {
  const [styleActive, setStyleActive] = useState(false)
  const [styleFailed, setStyleFailed] = useState(false)
  const [sizeFlag, setSizeFlag] = useState({})


  useEffect(() => {

    (window.innerWidth > 800) ?
      setSizeFlag({
        width: '5em',
        height: '5em',
      })
    :
      setSizeFlag({
        width: '4em',
        height: '4em',
      })

    countrySelect.forEach(value => {
      (value === name) ? setStyleActive(true) : null
    });

    (countrySelect.length === 0) ? setStyleActive(false) : null
  }, [countrySelect, name])


  const handlerOnClick = (name) => {
    if (name != countryNow.name && countryNow.name != undefined && !styleActive) {
      setStyleFailed(true)
      setTimeout(() => {
        setStyleFailed(false)
      }, 1000);
    }
    handlerClick(name)
  }


  return (
    <li className={[cardCountry, (styleActive) ? active : '', (styleFailed) ? failed : ''].join(' ')} onClick={() => handlerOnClick(name)}>
      <ReactCountryFlag
        countryCode={code}
        svg
        alt={code}
        style={sizeFlag}
      />
    </li>
  )
}

export default CountryLi