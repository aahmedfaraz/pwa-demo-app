import React from 'react';
import firebase from './firebase';
import logo from './logo.svg';
import './App.css';

function App() {

  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    return messaging.getToken();
  }).then(token => {
    console.log('token', token)
  }).catch(err => {
    console.error('error', err)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <small>PWA Demo App By </small>
        <h1><a href="https://github.com/aahmedfaraz"><strong>Ahmed Faraz</strong></a></h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
