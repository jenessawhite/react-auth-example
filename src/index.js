import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import AuthService from './utils/AuthService';
import App from './App';
import NoMatch from './NoMatch';
import Home from './Home';
import Login from './Login';
import './index.css';

//Create new instance of Auth0-lock
const auth = new AuthService('W6TYbt4L6sJiz8tBGWbN8TVDS39sZfQJ', 'jenessawhite.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth}/>
      <Route path="login" component={Login}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>,
  document.getElementById('root')
);
