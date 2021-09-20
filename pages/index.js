import { useState } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'

// Component
import Memory from '../components/home/Memory'
import Tictactoe from '../components/home/Tictactoe'
import Typing from '../components/home/Typing'
import Country from '../components/home/Country'

// Npm
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Routes / Data
import { Routes } from '../routes'
import dataMemory from '../data/memory.json'


export const getStaticProps = async () => {
  return {
    props: {
      routes: Routes,
      dataMemory
    }, // will be passed to the page component as props
  }
}



export default function Home({ routes, dataMemory }) {
  const [carrouselItem, setCarrouselItem] = useState(0)
  const [styleMachine, setStyleMachine] = useState('')

  const router = useRouter()

  function changeRoute(number) {
    if (window.innerWidth > 725 && window.innerHeight > 460) {
      routes.forEach( val => {
        setStyleMachine('fadeOutMachine')
        setTimeout(() => {
          (val.id === number) ? router.push(val.url) : null
        }, 500);
      })
    } else {
      routes.forEach( val => {
        (val.id === number) ? router.push(val.url) : null
      })
    }
  }

  return (
    <>
      <main className={styles.containerHome}>
        <div className={styles.bgHome}></div>
        <div className={[styles.arcadeMachine, styleMachine].join(' ')}>
          <div className={styles.topArcadeMachine}>
            <div className={styles.stripesArcadeMachine}></div>
            <div className={styles.logoArcadeMachine}>
              <Image src="/logo.png" alt="Logo GameRoom" layout="fill" objectFit='cover' quality={80}/>
            </div>
          </div>
          <div className={styles.topDetailsArcadeMachine}></div>
          <div className={styles.screenContainerArcadeMachine}>
            <div className={styles.shadowArcadeMachine}></div>
            <div className={styles.screenArcadeMachine}>
              <Carousel
                axis='horizontal'
                autoPlay={true}
                emulateTouch={true}
                infiniteLoop={true}
                interval={7500}
                onClickItem={(e) => changeRoute(e)}
                onChange={(e) => setCarrouselItem(e)}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                useKeyboardArrows={true}
                transitionTime={1000}>
                  <Memory target={carrouselItem} dataMemory={dataMemory} />
                  <Tictactoe target={carrouselItem} />
                  <Typing target={carrouselItem} />
                <Country target={carrouselItem} />
              </Carousel>
            </div>
            <div className={styles.joystickArcadeMachine}>
              <div className={styles.stickArcadeMachine}></div>
            </div>
          </div>
          <div className={styles.boardArcadeMachine}>
            <div className={[styles.buttonArcadeMachine, styles.buttonAArcadeMachine].join(' ')}></div>
            <div className={[styles.buttonArcadeMachine, styles.buttonBArcadeMachine].join(' ')}></div>
            <div className={[styles.buttonArcadeMachine, styles.buttonCArcadeMachine].join(' ')}></div>
          </div>
          <div className={styles.bottomArcadeMachine}>
            <div className={[styles.stripesArcadeMachine, styles.stripesFinishArcadeMachine].join(' ')}></div>
          </div>
        </div>
      </main>
    </>
  )
}
