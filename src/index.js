// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// Assets
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// App
import App from './containers/App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
    
registerServiceWorker();