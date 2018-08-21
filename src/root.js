import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './containers/home';

export default () => (
	<Router>
		<div>
			<Switch>
				<Route path="/" component={Home} />
				<Redirect to="/" />
			</Switch>
		</div>
	</Router>
);
