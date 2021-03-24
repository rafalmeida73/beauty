import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
    <title> Estética Rhoades</title>
    <link rel="icon" href="/favicon.ico" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
   </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
