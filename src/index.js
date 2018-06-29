import React from 'react';
import ReactDOM from 'react-dom';
import '/Users/Manuel/WebstormProjects/business_card_react/src/index.css';
import picture from '/Users/Manuel/WebstormProjects/business_card_react/src/picture.jpg';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './Store/index';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();