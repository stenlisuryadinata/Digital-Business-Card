import React from 'react';
import './App.css';
import {Main} from './components/main';
import {Buttons} from './components/buttons';
import {Skills} from './components/skills';

function App() {
  return (
    <div className="container">
      <div class="card-container">
        <span class="pro">PRO</span>
        <img src="https://res.cloudinary.com/stenli-suryadinata/image/upload/v1696324258/testing.jpg" alt="user"/>
        <Main />
        <Buttons />
        <Skills />
      </div>
    </div>
  );
}

export default App;

