import React, { useRef } from 'react';
import screenfull from 'screenfull';

function App() {
  const appRef = useRef(null);

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(appRef.current);
    } else {
      alert('Fullscreen not supported');
    }
  };

  return (
      <div className="App" ref={appRef} style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button
              onClick={toggleFullscreen}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
          >
            Toggle Fullscreen
          </button>
        </header>
      </div>
  );
}

export default App;
