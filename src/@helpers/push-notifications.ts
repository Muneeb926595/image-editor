import firebase from "firebase";

export const initializeFirebase = () => {
  let firebaseConfig = {
    apiKey: "AIzaSyCg1wrBOZbL0jaYfOmV7viVlwoFM_xzew4",
    authDomain: "whatsapp-52fab.firebaseapp.com",
    projectId: "whatsapp-52fab",
    storageBucket: "whatsapp-52fab.appspot.com",
    messagingSenderId: "108817013874",
    appId: "1:108817013874:web:34030c6efd034397e5f6eb",
  };

  firebase.initializeApp(firebaseConfig);
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();

    return token;
  } catch (error) {
    console.error(error);
  }
};
