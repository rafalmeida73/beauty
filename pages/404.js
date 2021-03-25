import Header from '../components/Header';
import FooterContent from '../components/Footer';
import styles from '../styles/NotFound.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import Lottie from 'react-lottie';
import animationData from '../public/404.json';

function NotFound() {

 const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
   preserveAspectRatio: "xMidYMid slice"
  }
 };

 return (
  <>
   <Header />
   <main className={styles.notFound}>
    <div className="container">
     <Lottie
      options={defaultOptions}
     />
     <h1>Não foi possível encontrar essa página!</h1>
    </div>
   </main>
   <FooterContent />
  </>
 )
}

export default NotFound