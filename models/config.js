const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./tassel-a0dc6-9b797589544c.json');

// Initialize Firebase
initializeApp({
    credential: cert(serviceAccount)
});

exports.db = getFirestore();