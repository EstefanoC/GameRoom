import { useEffect, useState, forwardRef } from 'react';

// Css
import { fail, good, now } from '../../styles/Typing.module.css'


// eslint-disable-next-line react/display-name
const SpanWords = forwardRef(({ start, value, target, status }, ref) => {
  const [style, setStyle] = useState('')


  useEffect(() => {
    if (target === value && status != undefined) {
      if (status) {
        setStyle('good')
      } else if (!status) {
        setStyle('fail')
      }
    }
    return () => {
      if (!start) {
        setStyle('')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, status])


  return <span ref={ref} className={[(target === value && status === undefined) ? now : '', (style === 'good') ? good : '', (style === 'fail') ? fail : '' ].join(' ')} style={{ opacity: ((style === 'good' || style === 'fail') && target !== value) ? '0.5' : 'inherit' }}>{value}</span>
})


export default SpanWords