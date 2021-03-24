import styles from './Header.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Navbar, Icon } from 'react-materialize';
import $ from 'jquery';
import Link from 'next/link';
import Image from 'next/image';

function Header() {

  if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
  }

  return (
    <header className={styles.header}>
      <Navbar
        alignLinks="right"
        brand={
          <Link className="brand-logo" href="/">
            <Image
              src="/logo.svg"
              alt="Estética"
              width={200}
              height={60}
              alt="Uma flor roxa e ao lado escrito Estética Rhoades"
            />
          </Link>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </Navbar>
    </header>
  )
};

export default Header;