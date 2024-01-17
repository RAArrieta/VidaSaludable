import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_tYECjE-DgGi299fa7WXTC7ZFnxT_1W0",
    authDomain: "vida-saludable-10f22.firebaseapp.com",
    projectId: "vida-saludable-10f22",
    storageBucket: "vida-saludable-10f22.appspot.com",
    messagingSenderId: "875621850802",
    appId: "1:875621850802:web:506ab1485cd5f5831fb3ab"
};

const app = initializeApp(firebaseConfig);
const data = getFirestore(app);

export default data;