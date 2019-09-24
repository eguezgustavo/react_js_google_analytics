import React from 'react';
import ReactGA from "react-ga";

function PageTwo() {
  return (
    <div>
      this is the page 2
        <button onClick={() => {
            ReactGA.event({
                uuid: 'askdjf0934',
                category: 'Page2',
                action: 'button clicked'
            });
        }}>Botón</button>
    </div>
  );
}

export default PageTwo;
