import { useState } from 'react';
import Header from '../../components/Header';
import FooterContent from '../../components/Footer';
import styles from '../styles/EditarPost.module.css';
import Image from 'next/image';
import { TextInput, Button, Icon, Textarea } from 'react-materialize';

function editarPost() {
 const [loading, setLoading] = useState(false);
 const [imageType, setImageType] = useState(false);
 const [img, setImg] = useState(null);
 const [des, setDes] = useState(null);
 const [link, setLink] = useState(null);
 const [text, setText] = useState(null);
 const [title, setTitle] = useState(null);
 const [error, setError] = useState(false);
 return (
  <>
   <Header />
   <main className={styles.edit}>
    <div className="container">
     {/* {imageType && (
                              <Alert variant="filled" severity="error">
                                   Envie uma imagem do tipo PNG, JPEG ou JPG!
                              </Alert>
                         )}
                         {error && (
                              <Alert variant="filled" severity="warning">
                                   Por favor, preencha todos os campos obrigatórios!
                              </Alert>
                         )} */}
     <form>
      <div class="file-field input-field" accept="image/png, image/jpeg, image/jpg">
       <input type="file" />
       <div class="file-path-wrapper">
        <Image
         src="/avatar.svg"
         alt="olhos"
         width={70}
         height={70}
         alt="Ilustração de um olho com sobrancelha"
        />
       </div>
      </div>
      <TextInput
       icon="title"
       id="title"
       label="Título *"
       value={title}
       onChange={e => setTitle(e.target.value)}
       noLayout
      />
      <TextInput
       icon="short_text"
       id="textShort"
       label="Descrição *"
       value={des}
       onChange={e => setDes(e.target.value)}
       noLayout
      />
      <Textarea
       icon={<Icon>sort</Icon>}
       id="Textarea-12"
       label="Texto do post *"
       value={text}
       data-length={300}
       onChange={e => setText(e.target.value)}
       noLayout
      />
      <TextInput
       icon="insert_link"
       id="link"
       label="Saber mais Link"
       value={link}
       onChange={e => setLink(e.target.value)}
       noLayout
      />

      <div className={`${styles.buttons}`}>
       <Button
        node="button"
        type="submit"
        waves="light"
        disabled={loading}
       >
        Editar
                                             <Icon left>
         edit
                                             </Icon>
       </Button>
      </div>
     </form>
    </div>
   </main>
   <FooterContent />
  </>
 )
}

export default editarPost;