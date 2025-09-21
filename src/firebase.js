// Use the installed Firebase modular SDK
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCZwAwbCnlkd45Nl1l1lI5tThDlMTyi9Ok',
    authDomain: 'smartcampusassistant-fdb80.firebaseapp.com',
    projectId: 'smartcampusassistant-fdb80',
    storageBucket: 'smartcampusassistant-fdb80.firebasestorage.app',
    messagingSenderId: '1038392195943',
    appId: '1:1038392195943:web:cd3882e7507d118a998dc2',
    measurementId: 'G-F7XWJDDF7W',
};

const app = initializeApp(firebaseConfig);

try {
    if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
        getAnalytics(app);
    }
} catch (e) {
    // ignore analytics init issues in non-browser environments
}

export const db = getFirestore(app);
