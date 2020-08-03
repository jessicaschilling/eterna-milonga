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
      </p>
      <p>
        You must be logged in to Spotify for full songs to play. For best results, use a laptop or desktop computer instead of your phone.
      </p>
      <p>
        <small>Made with <span role="img" aria-label="love">&#128155;</span> by <a href="https://www.jessicaschilling.com" target="_blank" rel="noopener noreferrer">Jessica Schilling</a> | <a href="https://github.com/jessicaschilling/eterna-milonga" target="_blank" rel="noopener noreferrer">GitHub</a></small>
      </p>
    </div>

  );
}

export default App;
