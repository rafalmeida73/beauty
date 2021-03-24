import styles from './Loading.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import animationData from '../../public/loading.json';
import Lottie from 'react-lottie';

const defaultOptions = {
 loop: true,
 autoplay: true,
 animationData: animationData,
 rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
 }
};

function Loading() {
 return (
  <>
   <main className={styles.loading}>
    <div className="container">
     <Lottie
      options={defaultOptions}
     />
    </div>
   </main>
  </>
 )
}

export default Loading