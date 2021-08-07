import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

window.env = process.env;

let config = Object.filter(process.env,(v,k)=>k.includes("REACT_APP_FB_"));
config = Object.entries(config).map((arr)=>{arr[0]=arr[0].split("REACT_APP_FB_").join('');return arr}).reduce((o,v)=>{o[v[0]]=v[1];return o},{});
const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId
};

firebase.initializeApp(firebaseConfig);

window.firebase = firebase;