import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import FooterContent from '../../components/Footer';
import styles from '../../styles/EditarPost.module.css';
import Image from 'next/image';
import { TextInput, Button, Icon, Textarea } from 'react-materialize';
import { useRouter } from 'next/router';
import Alert from '@material-ui/lab/Alert';
import firebase from '../../fireCinnection';
import fire from 'firebase/app';
import Loading from '../../components/Loading';

function editarPost() {
     const router = useRouter();
     const { id } = router.query;
     const [loading, setLoading] = useState(false);
     const [loadingPage, setloadingPage] = useState(true);
     const [imageType, setImageType] = useState(false);
     const [img, setImg] = useState("/upload.png");
     const [des, setDes] = useState("");
     const [link, setLink] = useState("");
     const [text, setText] = useState("");
     const [title, setTitle] = useState("");
     const [error, setError] = useState(false);

     useEffect(() => {
          fire.auth().onAuthStateChanged(function (user) {
               if (user) {
                    return true
               } else {
                    setloadingPage(true);
                    router.push("/login")
               }
          });

          firebase.getPost(id, (info) => {
               if (info.val() !== null) {
                    let { title, imagem, des, link, text } = info.val();
                    setImg(imagem);
                    setTitle(title);
                    setDes(des);
                    setLink(link);
                    setText(text);
                    setloadingPage(false);
               } else {
                    router.push("/404")
               }
          });

     }, []);

     const handleFile = async (e) => {
          if (e.target.files[0]) {

               const image = e.target.files[0];

               if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
                    const currentUid = firebase.getCurrentUid();

                    const uploadTaks = firebase.storage
                         .ref(`images/${currentUid}/${image.name}`)
                         .put(image);

                    await uploadTaks.on('state_changed',
                         (snapshot) => {
                              //progress
                              console.log("progress");
                              //     setImg(loading);
                              setLoading(true);
                         },
                         (error) => {
                              //error
                              console.log('Error imagem: ' + error);
                         },
                         () => {
                              //sucessO!
                              setLoading(false);
                              firebase.storage.ref(`images/${currentUid}`)
                                   .child(image.name).getDownloadURL()
                                   .then(url => {
                                        setImg(url);
                                   })
                         })
               } else {
                    setImageType(true);
                    return null;
               }
          }
     };

     async function handleSubmit(e) {
          e.preventDefault();
          if (img !== null && title !== "" && des !== "" && text !== "") {
               setError(false);
               const currentUid = firebase.getCurrentUid();

               let info = {
                    imagem: img,
                    title,
                    des,
                    text,
                    link,
                    autor: currentUid
               };

               await firebase.editPost(id, info);
               // console.log(info)
               router.push(`/posts/${id}`);
          } else {
               setError(true);
          }
     }


     return (
          <>
               <Header />
               {loadingPage ?
                    <Loading />
                    :
                    <main className={styles.edit}>
                         <div className="container">
                              {imageType && (
                                   <Alert variant="filled" severity="error">
                                        Envie uma imagem do tipo PNG, JPEG ou JPG!
                                   </Alert>
                              )}
                              {error && (
                                   <Alert variant="filled" severity="warning">
                                        Por favor, preencha todos os campos obrigatórios!
                                   </Alert>
                              )}
                              <form onSubmit={handleSubmit}>
                                   <div class="center-align" >
                                        <Image
                                             src={img}
                                             alt="olhos"
                                             width={250}
                                             height={250}
                                             alt="Campo para upload da foto do post"
                                        />
                                   </div>
                                   <TextInput
                                        id="TextInput-4"
                                        label="Alterar imagem"
                                        type="file"
                                        accept="image/png, image/jpeg, image/jpg"
                                        onChange={handleFile}
                                   />
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

                                   <div className={`${styles.buttons} `}>
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
               }
               <FooterContent />
          </>
     )
}

export default editarPost;