// Css
import { time, timeNumber, timeNumberActive } from '../../styles/Footer.module.css'

// Helpers
import StopWatch from '../Helpers/StopWatch';

const Time = ({ start, timeOut, timeNow }) => (
  <div className={time}>
    Time: <StopWatch classNames={[timeNumber, timeNumberActive]} start={start} timeOut={timeOut} timeNow={(value) => timeNow(value)}/>
  </div>
);

export default Time
