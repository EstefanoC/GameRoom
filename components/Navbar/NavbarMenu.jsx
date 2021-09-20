import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Css
import { navbarTab, navbarLink, navbarTabLine, active, navbarContainerUl, navbarContainerLi, navbarContainerA } from '../../styles/Navbar.module.css'


const NavbarMenu = ({ routes }) => {
  const [navbarStatus, setNavbarStatus] = useState(false)

  const router = useRouter();


  return (
    <div className={navbarLink}>
      <div className={[navbarTab, (navbarStatus) ? active : ''].join(' ')} onClick={() => {setNavbarStatus(!navbarStatus)}} >
        <span className={navbarTabLine}></span>
        <span className={navbarTabLine}></span>
        <span className={navbarTabLine}></span>
      </div>
      <ul className={[navbarContainerUl, (navbarStatus) ? active : ''].join(' ')}>
        {routes.map( value => (
          <Link key={value.id} href={`${value.url}`} passHref><li className={[navbarContainerLi, (router.asPath === value.url) ? active : ''].join(' ')}><a className={[navbarContainerA, (router.asPath === value.url) ? active : ''].join(' ')}>{value.url.substring(1)}</a></li></Link>
        ))}
      </ul>
    </div>
  )
}

export default NavbarMenu
