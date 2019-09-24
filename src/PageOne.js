import React from 'react';
import ReactGA from "react-ga";

function PageOne() {
  return (
    <div>
      this is the page 1
        <button onClick={() => {
            ReactGA.event({
                category: 'Page1',
                action: 'button clicked'
            });
        }}>Botón</button>
    </div>
  );
}

export default PageOne;
