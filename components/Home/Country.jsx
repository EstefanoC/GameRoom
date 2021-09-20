// Css
import { countrySky, flag, flagThirdLine, flagItem, flagFirstLine, flagWave, flagSecondLine, floor, mountain1, mountain2, sun, cloud, cloudFirst, cloudSecond, cloudThird, active  } from '../../styles/Country.module.css'

// Helpers
import TransitionHome from '../Helpers/TransitionHome'


const Country = ({ target }) => (
  <div className={[countrySky, (target === 3) ? active : ''].join(' ')} title="Choose countries by flags">
    <TransitionHome title="Country" description="Choose countries by flags"/>

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

    <div className={flag}>
      <div className={[flagThirdLine, flagItem].join(' ')}></div>
      <div className={[flagFirstLine, flagItem].join(' ')}></div>
      <div className={[flagSecondLine, flagItem].join(' ')}></div>
      <div className={flagWave}></div>
    </div>

  </div>
)

export default Country
