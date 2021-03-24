import { useState } from 'react';
import Header from '../components/Header';
import FooterContent from '../components/Footer';
import styles from '../styles/Login.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import { TextInput, Button, Icon } from 'react-materialize';
import Lottie from 'react-lottie';
import animationData from '../public/girls-face.json';
import $ from 'jquery';
import Alert from '@material-ui/lab/Alert';
import firebase from '../fireCinnection';
import { useRouter } from 'next/router'

function Login() {
  const router = useRouter()
  const [wrongPassword, setWrongPassword] = useState(false);
  const [UserNotFound, setUserNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  function handleSubmit(e) {
    if (email !== null && password !== null) {
      setError(false);
      firebase.login(email, password)
        .then((authData) => {
          console.log(authData);
          localStorage.setItem("uid", firebase.getCurrentUid())
           router.push("/blog");
        }).catch((error) => {
          if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
            setWrongPassword(true);
            setUserNotFound(true);
          }
          else {
            alert('Erro' + error.code)
          }
        });
    }
    setError(true);
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <main className={`${styles.login}`}>
        <div className="row">
          <div className={`col s12 m6 l6 ${styles.animation}`}>
            <Lottie
              options={defaultOptions}
            />
          </div>
          <div className={`col s12 m6 l6 ${styles.inputs}`}>
            <div className="errorBlock">
              {error ? (
                <Alert variant="filled" severity="warning">
                  Por favor, preencha todos os campos!
                </Alert>
              ) : ''}

              {wrongPassword || UserNotFound ? (
                <Alert variant="filled" severity="error">
                  E-mail ou senha incorretos!
                </Alert>
              ) : ''}
            </div>
            <h1>Fazer login</h1>
            <form onSubmit={handleSubmit}>
              <TextInput
                email
                error="E-mail inválido"
                icon="email"
                id="email"
                label="Email"
                validate
                onChange={e => setEmail(e.target.value)}
              />
              <TextInput
                icon="lock_outline"
                id="password"
                type="password"
                label="Senha"
                onChange={e => setPassword(e.target.value)}
              />

              <Button
                node="button"
                type="submit"
                waves="light"
              >
                Entrar
    <Icon left>
                  lock_open
    </Icon>
              </Button>
            </form>

          </div>
        </div>
      </main>
      <FooterContent />
    </>
  )
}

export default Login