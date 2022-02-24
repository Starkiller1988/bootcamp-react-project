import React from 'react';
import './App.css';
import Galery from './Galery/Galery';
import rickmorty from "./images/rickmorty.png"


function App() {
  return (
    <div className="App">

      <img className="logo" src={rickmorty} alt="" />

<Galery/>

    </div>
  );
}

export default App;
