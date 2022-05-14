importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAEaUpaeA1ZdF7AupMIhJUoJOo3i_6M3Kw',
  authDomain: 'tasselnew.firebaseapp.com',
  projectId: 'tasselnew',
  storageBucket: 'tasselnew.appspot.com',
  messagingSenderId: '461190444658',
  appId: '1:461190444658:web:f63238a5e508a9671ff4eb',
  measurementId: 'G-MG8GDC1K1Y',
});

// Retrieve firebase messaging.
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Recieved background message');
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo192.png',
  };
  return self.registration.showNotification(
      notificationTitle,
      notificationOptions,
  );
});
