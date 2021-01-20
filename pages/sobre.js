import Header from '../components/Header';
import FooterContent from '../components/Footer';
import Head from 'next/head'

function Sobre() {
 return (
  <>
   <Head>
    <title>Xablau Estética</title>
    <link rel="icon" href="/favicon.ico" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
   </Head>

   <div>
    <Header />
   </div>

   <FooterContent />
  </>
 )
};

export default Sobre;