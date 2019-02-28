import React from 'react';
import ReactDOM from 'react-dom';
import '@appbaseio/reactivesearch/dist/css/style.min.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { makeMainRoutes } from './routes';


 const routes = makeMainRoutes();
 
ReactDOM.render(<App />, routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
