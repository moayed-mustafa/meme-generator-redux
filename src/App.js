import React from 'react';
import logo from './logo.svg';
import './App.css';
import MemeForm from './MemeForm'
import DisplayMeme from './DisplayMeme'
import './meme.css'




function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <h1>Meme Generator</h1>
        <MemeForm />
        <DisplayMeme/>
      {/* </header> */}
    </div>
  );
}

export default App;
