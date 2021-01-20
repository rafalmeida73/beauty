import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import FooterContent from '../components/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import { Row, Button, Icon, Carousel } from 'react-materialize';
import Lottie from 'react-lottie';
import animationData from '../public/girls-face.json';
import { motion } from "framer-motion";
import ReactCompareImage from 'react-compare-image';
import Image from 'next/image';

export default function Home() {

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
      <Head>
        <title>Estética</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <div>
        <Header />
      </div>

      <main>
        <Row className={styles.main}>
          <div className={`col s12 m6 l6 ${styles.animation}`}>
            <Lottie
              options={defaultOptions}
            />
          </div>

          <div className="col s12 m6 l6">
            <h1>Estética</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <Button
              node="button"
              waves="light"
            >
              Entrar em contato
            <Icon left>
                email
             </Icon>
            </Button>
          </div>
        </Row>
      </main>

      <div className="row">
        <div className={styles.benefits}>
          <div className="col s12 m4 l4">
            <motion.div
              className={styles.square}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.3 }}
            >
              <div className={styles.descBenefit}>
                <Image
                  src="/olhos.svg"
                  alt="olhos"
                  width={150}
                  height={150}
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              </div>

            </motion.div>
          </div>

          <div className="col s12 m4 l4">
            <motion.div
              className={styles.square}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.3 }}
            >
              <div className={styles.descBenefit}>
                <Image
                  src="/olhos2.svg"
                  alt="olhos"
                  width={150}
                  height={150}
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              </div>

            </motion.div>
          </div>

          <div className="col s12 m4 l4">
            <motion.div
              className={styles.square}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.3 }}
            >
              <div className={styles.descBenefit}>
                <Image
                  src="/olhos.svg"
                  alt="olhos"
                  width={150}
                  height={150}
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Compare */}
      <div className={styles.compare}>
        <h2>Lorem Ipsum</h2>
        <div className="container">
          <ReactCompareImage
            leftImage="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg"
            leftImageLabel="Antes"
            rightImage="https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-ouro-preto-1008049370.jpg"
            rightImageLabel="Depois"
            sliderLineColor="#9E53AB"
            handle={
              <Image
                src="/flower.svg"
                alt="Picture of the author"
                width={120}
                height={120}
              />
            }
          />
        </div>
      </div>

      {/* Carousel */}
      <div className={styles.carousel}>
        <h3>Depoimentos</h3>

        <Carousel
          carouselId="Carousel-2"
          className="black-text center"
        >
          <div className={styles.comment}>
            <div>
              <Image
                src="/avatar.svg"
                alt="Julia"
                width={120}
                height={120}
              />
            </div>
            <h4>Julia</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
          </div>

          <div className={styles.comment}>
            <div>
              <Image
                src="/avatar.svg"
                alt="Julia"
                width={120}
                height={120}
              />
            </div>
            <h4>Julia</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
          </div>

          <div className={styles.comment}>
            <div>
              <Image
                src="/avatar.svg"
                alt="Julia"
                width={120}
                height={120}
              />
            </div>
            <h4>Julia</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
          </div>

          <div className={styles.comment}>
            <div>
              <Image
                src="/avatar.svg"
                alt="Julia"
                width={120}
                height={120}
              />
            </div>
            <h4>Julia</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
          </div>

        </Carousel>
      </div>

      <FooterContent />
    </>
  )
}
