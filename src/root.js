import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import {Header} from "./components/Header/index";
import {Sidebar} from "./components/Sidebar/index";

import Home from './containers/home';
import Details from './containers/details';

const history = createBrowserHistory();

const AppLayout = ({component: Component, ...rest}) => {
  return (
    <div>
      <Sidebar/>
      <Header/>

      <div className="app-container">
        <Component {...rest}/>
      </div>

    </div>
  );
};

export default () => (
  <Router>
    <div>
      <Switch>
        <AppLayout exact path="/" component={Home}/>
        <AppLayout exact path="/user/:id" component={Details}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  </Router>
);
