import styles from './Footer.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Footer } from 'react-materialize';
import Link from 'next/link';

function FooterContent() {
  return (
    <Footer
      className={styles.footer}
      copyrights="© 2021 Copyright Text"
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
        </ul>
      }
      moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
    >
      <h5 className="white-text">
      Estética
  </h5>
      <p className="grey-text text-lighten-4">
        You can use rows and columns here to organize your footer content.
  </p>
    </Footer>
  )
};

export default FooterContent;