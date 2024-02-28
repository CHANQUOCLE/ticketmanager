importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyCq2hRfugaBar1A7wxgD_PruHW40lDe0Sg",
  authDomain: "ticket-management-94649.firebaseapp.com",
  projectId: "ticket-management-94649",
  storageBucket: "ticket-management-94649.appspot.com",
  messagingSenderId: "134473046093",
  appId: "1:134473046093:web:2e93a2233eec7fbd4d6404",
  measurementId: "G-3SH3B4KMK3"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});