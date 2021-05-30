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
              Estética é um ramo da filosofia que tem por objetivo o estudo da natureza, da beleza e dos fundamentos da arte. Tem sua origem na palavra grega aisthesis, que significa "apreensão pelos sentidos", "percepção". É sobre a beleza, aparência harmoniosa em suas formas: estética facial, plástica, aspecto físico de alguém.
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
            >
              <div className={styles.descBenefit}>
                <Image
                  src="/olhos.svg"
                  width={150}
                  height={150}
                  alt="Ilustração de um olho com sobrancelha"
                />
                <strong>Vantagens da estética</strong>
                <p>
                  <ul>
                    <li>
                      <Image
                        src="/flower.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        alt="Flor roxa"
                      />
                      Ameniza rugas e linhas de expressão
                      </li>
                    <li>
                      <Image
                        src="/flower.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        alt="Flor roxa"
                      />
                      Deixa a pele mais bonita
                      </li>
                    <li>
                      <Image
                        src="/flower.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        alt="Flor roxa"
                      />
                      Melhora o aspecto das manchas
                      </li>
                    <li>
                      <Image
                        src="/flower.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        alt="Flor roxa"
                      />
                      Ajuda a elevar a autoestima
                      </li>
                    <li>
                      <Image
                        src="/flower.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        alt="Flor roxa"
                      />
                      Ajuda no funcionamento do intestino
                      </li>
                  </ul>

                </p>
              </div>

            </motion.div>
          </div>

          <div className="col s12 m4 l4">
            <motion.div
              className={styles.square}
              whileHover={{ scale: 0.9 }}
            >
              <div className={styles.descBenefit}>
                <Image
                  src="/olhos2.svg"
                  width={150}
                  height={150}
                  alt="Ilustração de um olho com sobrancelha"
                />
                <strong>Saúde e beleza</strong>
                <p>
                  Os procedimentos estéticos são procurados cada vez mais tanto por mulheres, quanto pelos homens. Afinal, são diversas opções e inovações nessa área que atrai diferentes perfis e atende a necessidades diversas.
              </p>
              </div>

            </motion.div>
          </div>

          <div className="col s12 m4 l4">
            <motion.div
              className={styles.square}
              whileHover={{ scale: 0.9 }}
            >
              <div className={styles.descBenefit}>
                <Image
                  src="/olhos.svg"
                  width={150}
                  height={150}
                  alt="Ilustração de um olho com sobrancelha"
                />
                <strong>Tipos de tratamentos</strong>
                <p>
                  <ul>
                    <li>
                      <Image
                        src="/flower.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        alt="Flor roxa"
                      />
                      Limpeza de pele
                      </li>
                    <li>
                      <Image
                        src="/flower.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        alt="Flor roxa"
                      />
                      Peeling de cristal
                      </li>
                    <li>
                      <Image
                        src="/flower.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        alt="Flor roxa"
                      />
                      Microagulhamento facial
                      </li>
                    <li>
                      <Image
                        src="/flower.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        alt="Flor roxa"
                      />
                      Tratamentos de estrias
                    </li>
                    <li>
                      <Image
                        src="/flower.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        alt="Flor roxa"
                      />
                      Depilação a laser
                      </li>
                  </ul>
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
            <h4>Mosias Alves</h4>
            <p>
              Muito cuidadosa!
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
              Esteticista braba 😎👍!
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

        </Carousel>
      </div>

      <FooterContent />
    </>
  )
}
