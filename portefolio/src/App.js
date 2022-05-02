import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Loading from './composants/Loading.js'
import Header from './header/Header.js';
import Home from './composants/Home.js';
import './header/header.css';

import audio from './images/Looking for a new beginning.ogg'


function App() {


  let song = new Audio(audio);
  // song.play()
  song.volume = 0.1;
  song.loop = true;

  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route path="/home" component={Home} />
        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
