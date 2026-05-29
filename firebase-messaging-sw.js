importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAskluSUlzitU5eW6iQ6Jrw6GTXMtlu0-c",
    authDomain: "f1-fantasy-e8204.firebaseapp.com",
    projectId: "f1-fantasy-e8204",
    storageBucket: "f1-fantasy-e8204.firebasestorage.app",
    messagingSenderId: "952247160192",
    appId: "1:952247160192:web:57bd2653326d5c7c7ec565"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'logo.jpg' 
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});