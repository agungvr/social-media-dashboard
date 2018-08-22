import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Root from './root';
import configureStore from './store/configure-store';
import rootReducer from './reducers';
import rootSaga from './sagas';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'react-notifications/lib/notifications.css';
import './assets/css/style.css'

const store = configureStore(rootReducer, rootSaga);

const el = document.createElement('div');
document.body.appendChild(el);

const mount = Component => render((
	<Provider store={store}>
		<Component/>
	</Provider>
), el);

mount(Root);

registerServiceWorker();
