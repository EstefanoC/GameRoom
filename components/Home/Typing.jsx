// Css
import { gradient, typing, typingInput, active } from '../../styles/Typing.module.css';

// Helpers
import TransitionHome from '../Helpers/TransitionHome';

// Npm
import ReactTyped from 'react-typed';


const Typing = ({ target }) => (
  <div className={[gradient, (target === 2) ? active : ''].join(' ')} title="Typing velocity">
    <TransitionHome title="typing" description={'type as fast as possible'}/>

    <div className={typing}>
      <ReactTyped
        loop={true}
        stopped={(target === 2)}
        typeSpeed={100}
        startDelay={2000}
        backSpeed={30}
        backDelay={3000}
        strings={["Test of typing fast", "Only people fast"]}
        smartBackspace
        shuffle={false}
        fadeOut={false}
        fadeOutDelay={500}
        attr="value"
        bindInputFocusEvents={true}
        >
        <input type="text" className={typingInput} disabled />
      </ReactTyped>
    </div>

  </div>
)

export default Typing
