import React from 'react';
import './App.css';
import TandaBuilder from './TandaBuilder';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Eterna Milonga: Build a random tanda!
        </h2>
        <TandaBuilder />
        <p>
          <em>Reload this page to get another tanda.</em>
        </p> 
      </header>
    </div>

  );
}

export default App;
