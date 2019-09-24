import React from 'react';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import {BrowserRouter, Route, Link} from "react-router-dom";
import ReactGA from "react-ga";


function initializeReactGA() {
    ReactGA.initialize('GA0123123');
    ReactGA.set({ userId: 123 });
    ReactGA.pageview('/');
    ReactGA.pageview('/page1');
    ReactGA.pageview('/page2');
}

function App() {

    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/page1">Page 1</Link></li>
                    <li><Link to="/page2">Page 2</Link></li>
                </ul>
            </div>
            <Route path="/page1" component={PageOne}/>
            <Route path="/page2" component={PageTwo}/>
        </BrowserRouter>
    );
}

export default App;

initializeReactGA();