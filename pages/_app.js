import '../styles/globals.css'
import '../styles/details.css'
import Head from 'next/head'

// Context
import { SettingsContextProvider } from '../data/context/context.jsx'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Game Room</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#40ED42" />
          <meta name="author" content="EstefanoC" />
          <meta name="description" content="Just fun in GameRoom" />
          <meta name="keywords" content="game, GameRoom, arcade, memories, tic tac, math, type fast" />
          <meta name="apple-mobile-web-app-title" content="GameRoom" />
          <meta name="apple-mobile-web-app-capable" content="no" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#40ED42" />
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@HaterAbstruso"/>
          <meta name="twitter:creator" content="@HaterAbstruso"/>
          <meta name="twitter:title" content="GameRoom"/>
          <meta name="twitter:description" content="Just fun in GameRoom"/>
          <meta name="twitter:image" content="https://i.ibb.co/t2cSJt3/logoMeta.png"/>
          <meta property="og:title" content="GameRoom"/>
          <meta property="og:description" content="Just fun in GameRoom"/>
          <meta property="og:image" content="https://i.ibb.co/t2cSJt3/logoMeta.png"/>
          <meta property="og:url" content="https://estefanoc.github.io/" />
          <meta property="og:site_name" content="GameRoom" />
          <meta property="og:locale" content="en_Us" />
          <meta property="og:type" content="article" />
      </Head>
      <SettingsContextProvider>
        <Component {...pageProps} />
      </SettingsContextProvider>
    </>
  )
}

export default MyApp
