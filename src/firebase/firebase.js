import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA6WJvsAjC09zDjfrNf5eOQsy1zmj_S_Rc",
  authDomain: "hostel-social.firebaseapp.com",
  databaseURL: "https://hostel-social.firebaseio.com",
  projectId: "hostel-social",
  storageBucket: "hostel-social.appspot.com",
  messagingSenderId: "97734006740"
};

// const prodConfig = {
//   // add production database information here
// }

// const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
