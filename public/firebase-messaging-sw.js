// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: "AIzaSyC0iAnaYEBwKWgrKdOfZNg2_WY0CcdWi3c",
    authDomain: "notification-push-4cf3f.firebaseapp.com",
    projectId: "notification-push-4cf3f",
    storageBucket: "notification-push-4cf3f.appspot.com",
    messagingSenderId: "636087122158",
    appId: "1:636087122158:web:4c67dc2997a07771f99bff",
    measurementId: "G-7Q0S7VQGCV"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    );
});
