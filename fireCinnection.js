import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
   }else {
    app.app(); // if already initialized, use that one
   }
    console.log(firebaseConfig)
    this.app = app.database();
    this.storage = app.storage();
  }

  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password)
  }

  logout = async () => {
    await app.auth().signOut()
      .catch((error) => {
        console.log(error)
      });

    localStorage.clear();
  }

  isInitialized() {
    return new Promise(resolve => {
      app.auth().onAuthStateChanged(resolve);
    })
  }

  getCurrent() {
    return app.auth().currentUser && app.auth().currentUser.email
  }

  getCurrentUid() {
    return app.auth().currentUser && app.auth().currentUser.uid
  }

  async getUserName(callback) {
    if (!app.auth().currentUser) {
      return null;
    }

    const uid = app.auth().currentUser.uid;
    await app.database().ref('usuarios').child(uid)
      .once('value').then(callback);
  }

  async getPost(id, callback) {
    await app.database().ref('posts').child(id)
      .once('value').then(callback).catch(error => {
        return null
      });
  }

  async deletePost(id) {
    await app.database().ref('posts').child(id).remove();
  }

  async editPost(id, data) {
    await app.database().ref('posts').child(id).set(data);
  }
}

export default new Firebase();