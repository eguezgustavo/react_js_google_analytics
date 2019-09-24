import React from 'react';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('HERE THE CODE');
    ReactGA.pageview('/');
}

function App() {
  return (
    <div>
      this is the app
    </div>
  );
}

initializeReactGA();

export default App;
