import React, { Component } from 'react'
import './App.css';

export default class Login extends Component {

  render() {
    const { auth } = this.props
    return (
      <div className="App">
        <h2>Login</h2>
        <p className="App-intro">
          Please login below
        </p>
        <button onClick={auth.login.bind(this)}>Login</button>
        {this.props.children}

      </div>
    );
  }
}
