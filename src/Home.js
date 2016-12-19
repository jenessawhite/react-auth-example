import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import './App.css';

export default class Home extends Component {
  onLogout () {
    this.props.auth.logout();
    browserHistory.push('login')
  }
  render() {
    return (
      <div className="App">
        {this.props.auth.loggedIn() ? <button onClick={this.onLogout.bind(this)}>Logout</button> : null}
        <br/>
          You're home!
          {this.props.children}
      </div>
    );
  }
}
