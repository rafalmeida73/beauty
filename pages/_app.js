import '../styles/globals.css'
import Head from 'next/head'
import NProgress from 'next-nprogress-emotion'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Estética Rhoades</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <meta name="description" content="A esteticista que você conhece como a palma da sua mão!" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estetica-rhoades.vercel.app" />
        <meta property="og:title" content="Estética Rhoades" />
        <meta property="og:description" content="A esteticista que você conhece como a palma da sua mão!" />
        <meta property="og:image" content="https://estetica-rhoades.vercel.app/index.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://estetica-rhoades.vercel.app" />
        <meta property="twitter:title" content="Estética Rhoades" />
        <meta property="twitter:description" content="A esteticista que você conhece como a palma da sua mão!" />
        <meta property="twitter:image" content="https://estetica-rhoades.vercel.app/index.png"></meta>
      </Head>
      <NProgress
        color="#fff"
        options={{ trickleSpeed: 50 }}
        showAfterMs={300}
        spinner
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
