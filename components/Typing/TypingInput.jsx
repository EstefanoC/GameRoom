import { useEffect, useRef, useState } from 'react'

// Css
import { TypingInput as container, TypingInputContent } from '../../styles/Typing.module.css'

// Helpers
import Alert from '../Helpers/Alert'


const TypingInput = ({ settings, wordNow, statusNow }) => {
  const [alert, setAlert] = useState(false)
  const [status, setStatus] = useState({
    wordsIndex: 0,
    status: undefined,
    failed: 0,
    success: 0,
    typing: 0
  })


  const ref = useRef()


  useEffect(() => {
    if (settings.start && !settings.time) {
      ref.current.disabled = false;
      ref.current.placeholder = '';
      ref.current.focus();
      statusNow(status)
    } else {
      ref.current.value = '';
      ref.current.disabled = true;
      ref.current.placeholder = 'Type here';
      ref.current.blur();
      setStatus({
        wordsIndex: 0,
        status: undefined,
        failed: 0,
        success: 0,
        typing: 0
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.start, settings.time])


  function handlerChange(e, enter) {
    if (e.nativeEvent.data == null && enter !== 'Enter') {
      if (e.target.value.length === 0) {
        setStatus({...status, status: undefined, typing: status.typing + 1})
        return statusNow({...status, status: undefined, typing: status.typing + 1})
      } else if (wordNow.word.slice(0, e.target.value.length) === e.target.value.toLowerCase()) {
        setStatus({...status, status: true, typing: status.typing + 1})
        return statusNow({...status, status: true, typing: status.typing + 1})
      } else {
        setStatus({...status, status: false, typing: status.typing + 1})
        return statusNow({...status, status: false, typing: status.typing + 1})
      }
    } else if (enter === 'Enter') {
      if (wordNow.word === ref.current.value.toLowerCase()) {
        setStatus({...status, status: undefined, wordsIndex: status.wordsIndex + 1, success: status.success + 1})
        statusNow({...status, status: undefined, wordsIndex: status.wordsIndex + 1, success: status.success + 1})
        ref.current.value = '';
      } else {
        setStatus({...status, status: false, wordsIndex: status.wordsIndex + 1, failed: status.failed + 1})
        statusNow({...status, status: false, wordsIndex: status.wordsIndex + 1, failed: status.failed + 1})
        setTimeout(() => {
          statusNow({...status, status: undefined, failed: status.failed + 1, wordsIndex: status.wordsIndex + 1})
        }, 0);
        ref.current.value = '';
      }
    } else if (e.nativeEvent.data.toLowerCase()  === ' ' && e.target.value.length > 1) {
      if (wordNow.word === e.target.value.toLowerCase().slice(0, -1)) {
        setStatus({...status, status: undefined, wordsIndex: status.wordsIndex + 1, success: status.success + 1})
        statusNow({...status, status: undefined, wordsIndex: status.wordsIndex + 1, success: status.success + 1})
        ref.current.value = '';
      } else {
        setStatus({...status, status: false, wordsIndex: status.wordsIndex + 1, failed: status.failed + 1})
        statusNow({...status, status: false, wordsIndex: status.wordsIndex + 1, failed: status.failed + 1})
        setTimeout(() => {
          statusNow({...status, status: undefined, failed: status.failed + 1, wordsIndex: status.wordsIndex + 1})
        }, 0);
        ref.current.value = '';
      }
    } else if (e.nativeEvent.data.toLowerCase()  === ' ' || Number(e.nativeEvent.data) >= 0 ) {
      ref.current.value = ref.current.value.slice(0, (ref.current.value.length - 1))
    } else {
      if (wordNow.word.slice(0, e.target.value.length) === e.target.value.toLowerCase()) {
        setStatus({...status, status: true, typing: status.typing + 1})
        statusNow({...status, status: true, typing: status.typing + 1})
      } else {
        setStatus({...status, status: false, typing: status.typing + 1})
        statusNow({...status, status: false, typing: status.typing + 1})
      }
    }
  }


  function callAlert() {
    if (!settings.start) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 4000);
    }
  }


  return (
    <div className={container} onClick={() => callAlert()}>
      <Alert message={'please, press start button'} visibility={alert} bg={'#ff21219c'} />
      <input type="text" name="typing" id="typing" className={TypingInputContent} ref={ref} onChange={(e) => handlerChange(e)} onKeyDown={(e) => handlerChange(e, e.key)} disabled={true} autoComplete="off" />
    </div>
  )
}


export default TypingInput