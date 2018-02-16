import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import  {Router , Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);
registerServiceWorker();
