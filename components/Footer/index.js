import styles from './Footer.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Footer } from 'react-materialize';
import Link from 'next/link';
import IsLogeed from '../isLogged';
import Store from '../Store'

function FooterContent() {
  return (
    <Footer
      className={styles.footer}
      copyrights="© 2021 Copyright Estética Rhoades"
      links={
        <ul>
          <li>
            <Link href="/">
              <a className="grey-text text-lighten-3">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a className="grey-text text-lighten-3">Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="grey-text text-lighten-3">Blog</a>
            </Link>
          </li>
          <Store>
          <IsLogeed />
        </Store>
        </ul>
      }
      moreLinks={
        <a
          className="grey-text text-lighten-4 right"
          href="https://github.com/rafalmeida73/estetica"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Rafael Santana"
        >
          Repositório no GitHub
        </a>}
    >
      <h5 className="white-text">
        Estética Rhoades
      </h5>
    </Footer>
  )
};

export default FooterContent;