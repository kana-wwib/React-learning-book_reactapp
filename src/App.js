import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from "firebase";

//Firebaseの設定
var firebaseConfig = {
  apiKey: "AIzaSyCyeyM4ONQJu-QYEEFMkJbNm2TZ6s-Kf3U",
  authDomain: "kana-react.firebaseapp.com",
  databaseURL: "https://kana-react.firebaseio.com",
  projectId: "kana-react",
  storageBucket: "kana-react.appspot.com",
  messagingSenderId: "646454837215",
  appId: "1:646454837215:web:41cff14677e222e563ce6a",
  measurementId: "G-FCZ95BBRJH"
};

//Firebaseの初期化
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//Appコンポーネント
class App extends Component {

  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}

export default App;