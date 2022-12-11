import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDP5G_5r8ueMACJ6AHmQnPawM91_9_NleY',
  authDomain: 'bougie-1f9b1.firebaseapp.com',
  projectId: 'bougie-1f9b1',
  storageBucket: 'bougie-1f9b1.appspot.com',
  messagingSenderId: '285153656747',
  appId: '1:285153656747:web:8f8acf5b68f50456665cee',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
