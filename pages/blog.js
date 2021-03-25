import { useState, useEffect } from 'react';
import Header from '../components/Header';
import FooterContent from '../components/Footer';
import styles from '../styles/Blog.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Icon, CardTitle } from 'react-materialize';
import Link from 'next/link'
import { motion } from "framer-motion";
import * as S from '../styles/Blog'
import firebase from '../fireCinnection';
import fire from 'firebase/app';
import { Fab, Action } from 'react-tiny-fab';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [autor, setAutor] = useState(false);

  useEffect(() => {
    Auth();

    firebase.app.ref('posts').on('value', (snapshot) => {
      let info = [];
      snapshot.forEach((childItem) => {

        info.push({
          key: childItem.key,
          title: childItem.val().title,
          img: childItem.val().imagem,
          des: childItem.val().des,
        })
      });
      setPosts(info);
    })
  }, []);

  function Auth() {
    var user = fire.auth().currentUser;

    if (user) {
      setAutor(true);
      return true
    } else {
      setAutor(false);
      return false
    }
  }

  return (
    <>
      <Header />
      <main className={`${styles.blog}`}>
        {autor && (
          <Fab
            icon={<Icon>add</Icon>}
            event="hover"
            alwaysShowTitle={true}
          >
            <Action
              text="Novo post"
            >
              <Link href="/novoPost">
                <Icon className="white-text">add</Icon>
              </Link>
            </Action>
          </Fab>
        )}

        <h1>Blog Rhoades</h1>
        <div className={`row ${styles.cardData}`}>
          {posts.map(post => {
            let { key, title, img, des } = post;
            return (
              <S.Card className="col s12 m4 l4" key={key}>
                <Link href={`/posts/${key}`}>
                  <a title={title}>
                  <motion.div
                    animate={{ scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1 }}
                  >
                    <Link href={`/posts/${key}`}>
                      <Card
                        actions={[
                          <Link href={`/posts/${key}`}>Saber Mais</Link>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={img}>{title}</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                      >
                        {des}
                      </Card>
                    </Link>
                  </motion.div>
                  </a>
                </Link>
              </S.Card>
            )
          })}

        </div>
      </main>
      <FooterContent />
    </>
  )
}

export default Blog