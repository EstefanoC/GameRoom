import { useState, useEffect } from 'react';

// Css
import { cardMemory, backCard, containerBackCard, TextBackCard, frontCard, containerFrontCard, contentFrontCard, containerFrontCardDetail, active, staticActive } from '../../styles/Memory.module.css'


const MemoryLi = ({ index, value, setCard, cardSelect, cardFlipped }) => {
  const [styleActive, setStyleActive] = useState(false)
  const [styleActiveFixed, setStyleActiveFixed] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    cardFlipped.forEach(value => {
      (value === index) ? setStyleActiveFixed(true) : null
    });

      if (cardSelect[0] === index || cardSelect[1] === index) {
        return setStyleActive(true)
      }

      if (cardSelect.length >= 2) {
        return setStyleActive(false)
      }

      if (cardSelect.length === 0) {
        setStyleActive(false)
      }

      (cardFlipped.length === 0) ? setStyleActiveFixed(false) : null
  })


  return (
    <li className={[cardMemory, (styleActive) ? active : '', (styleActiveFixed) ? staticActive : ''].join(' ')} onClick={() => setCard(index)}>
      <div className={backCard}>
        <div className={containerBackCard}>
          <div className={containerFrontCardDetail}></div>
          <h2 className={TextBackCard}>memory</h2>
        </div>
      </div>
      <div className={frontCard}>
        <div className={containerFrontCard}>
          <strong className={contentFrontCard}>{value}</strong>
        </div>
      </div>
    </li>
  )
}

export default MemoryLi