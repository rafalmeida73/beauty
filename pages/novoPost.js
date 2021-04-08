import { useState, useEffect } from 'react';
import Header from '../components/Header';
import FooterContent from '../components/Footer';
import styles from '../styles/NovoPost.module.css';
import Image from 'next/image';
import { TextInput, Button, Icon, Textarea } from 'react-materialize';
import Alert from '@material-ui/lab/Alert';
import firebase from '../fireCinnection';
import fire from 'firebase/app';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';

function novoPost() {
     const router = useRouter();
     const [loading, setLoading] = useState(false);
     const [loadingPage, setloadingPage] = useState(true);
     const [imageType, setImageType] = useState(false);
     const [des, setDes] = useState(null);
     const [link, setLink] = useState("");
     const [text, setText] = useState(null);
     const [title, setTitle] = useState(null);
     const [url, setUrl] = useState(null);
     const [error, setError] = useState(false);

     useEffect(() => {
          fire.auth().onAuthStateChanged(function (user) {
               if (user) {
                    setloadingPage(false);
               } else {
                    setloadingPage(true);
                    router.push("/login")
               }
          });
     });

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
                              setLoading(true);
                              //    setUrl(loading); img preloader
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
                                        setUrl(url);
                                   })
                         })
               } else {
                    setImageType(true);
                    return null;
               }
          }
          e.preventDefault()
     };

     function handleSubmit(e) {
          e.preventDefault();
          if (url !== null && title !== null && des !== null && text !== null) {
               setError(false);
               const currentUid = firebase.getCurrentUid();
               let posts = firebase.app.ref('posts');
               let key = posts.push().key;
               posts.child(key).set({
                    imagem: url,
                    title,
                    des,
                    text,
                    link,
                    autor: currentUid
               });

               router.push(`/posts/${key}`);
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
                    <main className={styles.new}>
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
                                   <div class="file-field input-field center-align" >
                                        <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleFile} />
                                        <div class="file-path-wrapper">
                                             {
                                                  url === null ?
                                                       <svg width="250" height="184" viewBox="0 0 250 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="250" height="183.824" fill="#9E53AB" />
                                                            <path d="M55.5781 151.186C55.5326 152.175 55.2656 153.051 54.7773 153.812C54.2891 154.568 53.6022 155.154 52.7168 155.57C51.8379 155.987 50.832 156.195 49.6992 156.195C47.8307 156.195 46.3594 155.587 45.2852 154.369C44.2109 153.152 43.6738 151.433 43.6738 149.213V148.51C43.6738 147.117 43.9147 145.899 44.3965 144.857C44.8848 143.809 45.5846 143.002 46.4961 142.436C47.4076 141.863 48.4622 141.576 49.6602 141.576C51.3854 141.576 52.7721 142.032 53.8203 142.943C54.8685 143.848 55.4642 145.098 55.6074 146.693H52.1895C52.1634 145.827 51.9453 145.206 51.5352 144.828C51.125 144.451 50.5 144.262 49.6602 144.262C48.8073 144.262 48.1823 144.581 47.7852 145.219C47.388 145.857 47.1797 146.876 47.1602 148.275V149.281C47.1602 150.798 47.349 151.882 47.7266 152.533C48.1107 153.184 48.7682 153.51 49.6992 153.51C50.487 153.51 51.0892 153.324 51.5059 152.953C51.9225 152.582 52.1439 151.993 52.1699 151.186H55.5781ZM63 156C62.8828 155.785 62.7786 155.469 62.6875 155.053C62.082 155.814 61.2357 156.195 60.1484 156.195C59.1523 156.195 58.306 155.896 57.6094 155.297C56.9128 154.691 56.5645 153.933 56.5645 153.021C56.5645 151.876 56.9876 151.01 57.834 150.424C58.6803 149.838 59.9108 149.545 61.5254 149.545H62.541V148.988C62.541 148.018 62.1211 147.533 61.2812 147.533C60.5 147.533 60.1094 147.917 60.1094 148.686H56.8184C56.8184 147.663 57.2513 146.833 58.1172 146.195C58.9896 145.557 60.0996 145.238 61.4473 145.238C62.7949 145.238 63.8594 145.567 64.6406 146.225C65.4219 146.882 65.8223 147.784 65.8418 148.93V153.607C65.8548 154.577 66.0046 155.32 66.291 155.834V156H63ZM60.9395 153.852C61.3496 153.852 61.6882 153.764 61.9551 153.588C62.2285 153.412 62.4238 153.214 62.541 152.992V151.303H61.584C60.4382 151.303 59.8652 151.817 59.8652 152.846C59.8652 153.145 59.9661 153.389 60.168 153.578C60.3698 153.76 60.627 153.852 60.9395 153.852ZM74.0645 148.412L72.9805 148.334C71.9453 148.334 71.2812 148.66 70.9883 149.311V156H67.6973V145.434H70.7832L70.8906 146.791C71.444 145.756 72.2155 145.238 73.2051 145.238C73.5566 145.238 73.8626 145.277 74.123 145.355L74.0645 148.412ZM81.6426 148.412L80.5586 148.334C79.5234 148.334 78.8594 148.66 78.5664 149.311V156H75.2754V145.434H78.3613L78.4688 146.791C79.0221 145.756 79.7936 145.238 80.7832 145.238C81.1348 145.238 81.4408 145.277 81.7012 145.355L81.6426 148.412ZM87.7461 156.195C86.125 156.195 84.8132 155.714 83.8105 154.75C82.8079 153.78 82.3066 152.52 82.3066 150.971V150.697C82.3066 149.617 82.5052 148.663 82.9023 147.836C83.306 147.009 83.8919 146.371 84.6602 145.922C85.4284 145.466 86.3398 145.238 87.3945 145.238C88.8789 145.238 90.0508 145.701 90.9102 146.625C91.7695 147.543 92.1992 148.826 92.1992 150.473V151.752H85.6562C85.7734 152.344 86.0306 152.81 86.4277 153.148C86.8249 153.487 87.3392 153.656 87.9707 153.656C89.0124 153.656 89.8262 153.292 90.4121 152.562L91.916 154.34C91.5059 154.906 90.9232 155.359 90.168 155.697C89.4193 156.029 88.612 156.195 87.7461 156.195ZM87.375 147.777C86.4115 147.777 85.8385 148.415 85.6562 149.691H88.9766V149.438C88.9896 148.91 88.8561 148.503 88.5762 148.217C88.2962 147.924 87.8958 147.777 87.375 147.777ZM93.1465 150.639C93.1465 149.571 93.3223 148.627 93.6738 147.807C94.0254 146.986 94.5299 146.355 95.1875 145.912C95.8451 145.463 96.61 145.238 97.4824 145.238C98.5827 145.238 99.4421 145.609 100.061 146.352L100.178 145.434H103.166V155.6C103.166 156.531 102.948 157.338 102.512 158.021C102.082 158.712 101.457 159.239 100.637 159.604C99.8164 159.975 98.8659 160.16 97.7852 160.16C97.0104 160.16 96.2585 160.014 95.5293 159.721C94.8066 159.428 94.2533 159.047 93.8691 158.578L95.2461 156.645C95.8581 157.367 96.6654 157.729 97.668 157.729C99.1263 157.729 99.8555 156.98 99.8555 155.482V155.15C99.224 155.847 98.4264 156.195 97.4629 156.195C96.1738 156.195 95.1322 155.704 94.3379 154.721C93.5436 153.731 93.1465 152.41 93.1465 150.756V150.639ZM96.4473 150.844C96.4473 151.71 96.61 152.396 96.9355 152.904C97.2611 153.406 97.7168 153.656 98.3027 153.656C99.0124 153.656 99.5299 153.419 99.8555 152.943V148.5C99.5365 148.018 99.0254 147.777 98.3223 147.777C97.7363 147.777 97.2773 148.041 96.9453 148.568C96.6133 149.089 96.4473 149.848 96.4473 150.844ZM110.988 156C110.871 155.785 110.767 155.469 110.676 155.053C110.07 155.814 109.224 156.195 108.137 156.195C107.141 156.195 106.294 155.896 105.598 155.297C104.901 154.691 104.553 153.933 104.553 153.021C104.553 151.876 104.976 151.01 105.822 150.424C106.669 149.838 107.899 149.545 109.514 149.545H110.529V148.988C110.529 148.018 110.109 147.533 109.27 147.533C108.488 147.533 108.098 147.917 108.098 148.686H104.807C104.807 147.663 105.24 146.833 106.105 146.195C106.978 145.557 108.088 145.238 109.436 145.238C110.783 145.238 111.848 145.567 112.629 146.225C113.41 146.882 113.811 147.784 113.83 148.93V153.607C113.843 154.577 113.993 155.32 114.279 155.834V156H110.988ZM108.928 153.852C109.338 153.852 109.676 153.764 109.943 153.588C110.217 153.412 110.412 153.214 110.529 152.992V151.303H109.572C108.426 151.303 107.854 151.817 107.854 152.846C107.854 153.145 107.954 153.389 108.156 153.578C108.358 153.76 108.615 153.852 108.928 153.852ZM122.053 148.412L120.969 148.334C119.934 148.334 119.27 148.66 118.977 149.311V156H115.686V145.434H118.771L118.879 146.791C119.432 145.756 120.204 145.238 121.193 145.238C121.545 145.238 121.851 145.277 122.111 145.355L122.053 148.412ZM131.691 156H128.391V145.434H131.691V156ZM128.195 142.709C128.195 142.24 128.365 141.856 128.703 141.557C129.042 141.257 129.481 141.107 130.021 141.107C130.562 141.107 131.001 141.257 131.34 141.557C131.678 141.856 131.848 142.24 131.848 142.709C131.848 143.178 131.678 143.562 131.34 143.861C131.001 144.161 130.562 144.311 130.021 144.311C129.481 144.311 129.042 144.161 128.703 143.861C128.365 143.562 128.195 143.178 128.195 142.709ZM136.838 145.434L136.945 146.674C137.694 145.717 138.7 145.238 139.963 145.238C141.298 145.238 142.199 145.769 142.668 146.83C143.384 145.769 144.419 145.238 145.773 145.238C147.915 145.238 149.016 146.534 149.074 149.125V156H145.773V149.33C145.773 148.79 145.682 148.396 145.5 148.148C145.318 147.901 144.986 147.777 144.504 147.777C143.853 147.777 143.368 148.067 143.049 148.646L143.059 148.783V156H139.758V149.35C139.758 148.796 139.67 148.396 139.494 148.148C139.318 147.901 138.983 147.777 138.488 147.777C137.857 147.777 137.375 148.067 137.043 148.646V156H133.752V145.434H136.838ZM156.906 156C156.789 155.785 156.685 155.469 156.594 155.053C155.988 155.814 155.142 156.195 154.055 156.195C153.059 156.195 152.212 155.896 151.516 155.297C150.819 154.691 150.471 153.933 150.471 153.021C150.471 151.876 150.894 151.01 151.74 150.424C152.587 149.838 153.817 149.545 155.432 149.545H156.447V148.988C156.447 148.018 156.027 147.533 155.188 147.533C154.406 147.533 154.016 147.917 154.016 148.686H150.725C150.725 147.663 151.158 146.833 152.023 146.195C152.896 145.557 154.006 145.238 155.354 145.238C156.701 145.238 157.766 145.567 158.547 146.225C159.328 146.882 159.729 147.784 159.748 148.93V153.607C159.761 154.577 159.911 155.32 160.197 155.834V156H156.906ZM154.846 153.852C155.256 153.852 155.594 153.764 155.861 153.588C156.135 153.412 156.33 153.214 156.447 152.992V151.303H155.49C154.344 151.303 153.771 151.817 153.771 152.846C153.771 153.145 153.872 153.389 154.074 153.578C154.276 153.76 154.533 153.852 154.846 153.852ZM161.193 150.639C161.193 149.571 161.369 148.627 161.721 147.807C162.072 146.986 162.577 146.355 163.234 145.912C163.892 145.463 164.657 145.238 165.529 145.238C166.63 145.238 167.489 145.609 168.107 146.352L168.225 145.434H171.213V155.6C171.213 156.531 170.995 157.338 170.559 158.021C170.129 158.712 169.504 159.239 168.684 159.604C167.863 159.975 166.913 160.16 165.832 160.16C165.057 160.16 164.305 160.014 163.576 159.721C162.854 159.428 162.3 159.047 161.916 158.578L163.293 156.645C163.905 157.367 164.712 157.729 165.715 157.729C167.173 157.729 167.902 156.98 167.902 155.482V155.15C167.271 155.847 166.473 156.195 165.51 156.195C164.221 156.195 163.179 155.704 162.385 154.721C161.59 153.731 161.193 152.41 161.193 150.756V150.639ZM164.494 150.844C164.494 151.71 164.657 152.396 164.982 152.904C165.308 153.406 165.764 153.656 166.35 153.656C167.059 153.656 167.577 153.419 167.902 152.943V148.5C167.583 148.018 167.072 147.777 166.369 147.777C165.783 147.777 165.324 148.041 164.992 148.568C164.66 149.089 164.494 149.848 164.494 150.844ZM178.195 156.195C176.574 156.195 175.262 155.714 174.26 154.75C173.257 153.78 172.756 152.52 172.756 150.971V150.697C172.756 149.617 172.954 148.663 173.352 147.836C173.755 147.009 174.341 146.371 175.109 145.922C175.878 145.466 176.789 145.238 177.844 145.238C179.328 145.238 180.5 145.701 181.359 146.625C182.219 147.543 182.648 148.826 182.648 150.473V151.752H176.105C176.223 152.344 176.48 152.81 176.877 153.148C177.274 153.487 177.788 153.656 178.42 153.656C179.462 153.656 180.275 153.292 180.861 152.562L182.365 154.34C181.955 154.906 181.372 155.359 180.617 155.697C179.868 156.029 179.061 156.195 178.195 156.195ZM177.824 147.777C176.861 147.777 176.288 148.415 176.105 149.691H179.426V149.438C179.439 148.91 179.305 148.503 179.025 148.217C178.745 147.924 178.345 147.777 177.824 147.777ZM187.092 145.434L187.199 146.674C187.948 145.717 188.954 145.238 190.217 145.238C191.551 145.238 192.453 145.769 192.922 146.83C193.638 145.769 194.673 145.238 196.027 145.238C198.169 145.238 199.27 146.534 199.328 149.125V156H196.027V149.33C196.027 148.79 195.936 148.396 195.754 148.148C195.572 147.901 195.24 147.777 194.758 147.777C194.107 147.777 193.622 148.067 193.303 148.646L193.312 148.783V156H190.012V149.35C190.012 148.796 189.924 148.396 189.748 148.148C189.572 147.901 189.237 147.777 188.742 147.777C188.111 147.777 187.629 148.067 187.297 148.646V156H184.006V145.434H187.092Z" fill="white" />
                                                            <path d="M124.999 37.3159C109.317 37.3159 96.5643 50.0687 96.5643 65.7511V67.4745H94.8409C83.8977 67.4745 75.0225 76.3497 75.0225 87.2929C75.0225 98.2362 83.8977 107.111 94.8409 107.111H99.1493C100.614 107.111 101.734 105.991 101.734 104.526C101.734 103.062 100.614 101.941 99.1493 101.941H94.8409C86.7412 101.941 80.1925 95.3927 80.1925 87.2929C80.1925 79.1932 86.7412 72.6445 94.8409 72.6445H99.1493C100.614 72.6445 101.734 71.5243 101.734 70.0595V65.7511C101.734 52.9122 112.161 42.486 124.999 42.486C137.838 42.486 148.265 52.9122 148.265 65.7511V70.0595C148.265 71.5243 149.385 72.6445 150.85 72.6445H155.158C163.258 72.6445 169.806 79.1932 169.806 87.2929C169.806 95.3927 163.258 101.941 155.158 101.941H150.85C149.385 101.941 148.265 103.062 148.265 104.526C148.265 105.991 149.385 107.111 150.85 107.111H155.158C166.101 107.111 174.977 98.2362 174.977 87.2929C174.977 76.3497 166.101 67.4745 155.158 67.4745H153.435V65.7511C153.435 50.0687 140.682 37.3159 124.999 37.3159ZM124.968 80.3996C124.31 80.3996 123.664 80.6584 123.19 81.1754L110.265 94.1005C109.231 95.1345 109.231 96.771 110.265 97.7188C111.299 98.7529 112.936 98.7529 113.884 97.7188L122.414 89.1879V126.068C122.414 127.533 123.535 128.653 124.999 128.653C126.464 128.653 127.585 127.533 127.585 126.068V89.1879L136.115 97.7188C136.632 98.2358 137.321 98.4947 137.925 98.4947C138.528 98.4947 139.217 98.2358 139.734 97.7188C140.768 96.6848 140.768 95.0483 139.734 94.1005L126.809 81.1754C126.292 80.6584 125.625 80.3996 124.968 80.3996Z" fill="white" />
                                                       </svg>

                                                       :
                                                       <Image
                                                            src={url}
                                                            width={250}
                                                            height={250}
                                                            alt="Ícone de uma nuvem com uma seta apara cima."
                                                       />
                                             }
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
                                             Criar
                                             <Icon left>
                                             create
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

export default novoPost;