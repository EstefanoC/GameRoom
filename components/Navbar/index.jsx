import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'


// Components
import StartGame from './StartGame'
import NavbarMenu from './NavbarMenu'

// Css
import { navbar, navbarLogo } from '../../styles/Navbar.module.css'


const Navbar = ({ startValue, startChange, routes }) => {
  const [width, setWidth] = useState([0, null]);

  useEffect(() => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setWidth([window.innerWidth, 'android'])
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setWidth([window.innerWidth, 'iphone'])
    } else {
      setWidth([window.innerWidth, null])
    }
  }, [])

  return (
    <nav className={navbar}>

      <Link href='/' aspath={{styleHome: 'fadeOut'}} passHref>
        <div className={navbarLogo} title='home'>
          {
            (width[0] <= 1500 || width[1]) ? <Image src="/logo-sm.png" alt="Logo GameRoom" width={100} height={100} sizes={'10vh'} layout={'responsive'} quality={75} /> : <Image src="/GameRoom.svg" alt="Logo GameRoom" width={300} height={72} sizes={'10vh'} layout={'responsive'} quality={75} />
          }
        </div>
      </Link>

      <StartGame value={startValue} handlerStart={() => startChange()} />

      <NavbarMenu routes={routes} />

    </nav>
  )
}

export default Navbar
