// Css
import { transitionHomeMemory, transitionHomeContainerMemory, transitionHomeTitleMemory } from '../../styles/Memory.module.css'
import { transitionHomeTictac, transitionHomeContainerTictac, transitionHomeTitleTictac } from '../../styles/Tictactoe.module.css'
import { transitionHomeTyping, transitionHomeContainerTyping, transitionHomeTitleTyping, transitionHomeDescriptionTyping } from '../../styles/Typing.module.css'
import { transitionHomeCountry, transitionHomeContainerCountry, transitionHomeTitleCountry, transitionHomeDescriptionCountry } from '../../styles/Country.module.css'


const TransitionHome = ({ title, description }) => (
  <div className={[transitionHomeMemory, transitionHomeTictac, transitionHomeTyping, transitionHomeCountry].join(' ')}>
    <div className={[transitionHomeContainerMemory, transitionHomeContainerTictac, transitionHomeContainerTyping, transitionHomeContainerCountry].join(' ')}>
      <h3 className={[transitionHomeTitleMemory, transitionHomeTitleTictac, transitionHomeTitleTyping, transitionHomeTitleCountry].join(' ')}>{title}</h3>
      <strong className={[transitionHomeDescriptionCountry, transitionHomeDescriptionTyping].join(' ')}>{description}</strong>
    </div>
  </div>
)

export default TransitionHome
