import Header from '../components/Header';
import FooterContent from '../components/Footer';
import styles from '../styles/Blog.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Icon, CardTitle } from 'react-materialize';
import Link from 'next/link'
import { motion } from "framer-motion";
import * as S from '../styles/Blog'

function Blog() {
 return (
  <>
   <Header />
   <main className={`${styles.blog}`}>

    <h1>Blog Rhoades</h1>
    <div className={`row ${styles.cardData}`}>

     <S.Card className="col s12 m4 l4">
      <motion.div
       animate={{ scale: 0.9 }}
       transition={{ duration: 0.5 }}
       whileHover={{ scale: 1 }}
      >
       <Link href="/">
        <Card
         actions={[
          <Link href="/">Saber Mais</Link>
         ]}
         closeIcon={<Icon>close</Icon>}
         header={<CardTitle image="/card.png">title</CardTitle>}
         revealIcon={<Icon>more_vert</Icon>}
        >
         des
        </Card>
       </Link>
      </motion.div>
     </S.Card>

    </div>
   </main>
   <FooterContent />
  </>
 )
}

export default Blog