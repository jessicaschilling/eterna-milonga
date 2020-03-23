import React from 'react';
import TandaBuilder from './TandaBuilder';

function App() {

  return (
    <div className="tandaPlayer">
        <h1>
          Eterna Milonga
        </h1>
        <h2>
          Build a random tanda!
        </h2>
      <TandaBuilder />
      <p>
        Reload this page to get another tanda.
        <br/>
        <strong>Note!</strong> You must be logged in to Spotify for full songs to play.
        <br/>
        <small>Made with &#128155; by <a href="https://www.jessicaschilling.com" target="_blank" rel="noopener noreferrer">Jessica Schilling</a> | <a href="https://github.com/jessicaschilling/eterna-milonga" target="_blank" rel="noopener noreferrer">GitHub</a></small>
      </p>
    </div>

  );
}

export default App;
