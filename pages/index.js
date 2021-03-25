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
import Link from 'next/link';

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
            <h1>Estética Rhoades</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Link href="/sobre">
              <Button
                node="button"
                waves="light"
              >
                Saber mais
            <Icon left>
                  add
             </Icon>
              </Button>
            </Link>
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
                  width={150}
                  height={150}
                  alt="Ilustração de um olho com sobrancelha"
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
                  width={150}
                  height={150}
                  alt="Ilustração de um olho com sobrancelha"
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
                  width={150}
                  height={150}
                  alt="Ilustração de um olho com sobrancelha"
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
        <h2>Um dos nossos resultados</h2>
        <div className="container">
          <ReactCompareImage
            leftImage="/before.png"
            leftImageLabel="Antes"
            rightImage="/after.png"
            rightImageLabel="Depois"
            sliderLineColor="#9E53AB"
            handle={
              <Image
                src="/flower.svg"
                width={120}
                height={120}
                alt="Flor roxa"
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
                src="/mosias.png"
                width={120}
                height={120}
                alt="Imagem de perfil do usuário que fez o comentário."
              />
            </div>
            <h4>Pablo Escobar</h4>
            <p>
              Você aceita ¿Plata ou plomo?
              </p>
          </div>

          <div className={styles.comment}>
            <div>
              <Image
                src="/tiringa.jpg"
                width={120}
                height={120}
                alt="Imagem de perfil do usuário que fez o comentário."
              />
            </div>
            <h4>Tiringa</h4>
            <p>
              Cuma é a historia?
            </p>
          </div>

          <div className={styles.comment}>
            <div>
              <Image
                src="/claudio.png"
                width={120}
                height={120}
                alt="Imagem de perfil do usuário que fez o comentário."
              />
            </div>
            <h4>Claudio Luã</h4>
            <p>
              A melhor esteticista de SP!
            </p>
          </div>


          <div className={styles.comment}>
            <div>
              <Image
                src="/thiago.png"
                width={120}
                height={120}
                alt="Imagem de perfil do usuário que fez o comentário."
              />
            </div>
            <h4>Thiago Henrique</h4>
            <p>
              Preço muito alto!
              </p>
          </div>

          <div className={styles.comment}>
            <div>
              <Image
                src="/rafael.jpg"
                width={120}
                height={120}
                alt="Imagem de perfil do usuário que fez o comentário."
              />
            </div>
            <h4>Rafael Santana</h4>
            <p>
              Esteticista braba!
            </p>
          </div>

          <div className={styles.comment}>
            <div>
              <Image
                src="/rica.png"
                width={120}
                height={120}
                alt="Imagem de perfil do usuário que fez o comentário."
              />
            </div>
            <h4>Ricardo Silva</h4>
            <p>
              Xbox!
            </p>
          </div>

        </Carousel>
      </div>

      <FooterContent />
    </>
  )
}
