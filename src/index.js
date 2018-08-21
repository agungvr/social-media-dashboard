import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import App from './containers/home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
