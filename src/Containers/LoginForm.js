import React, { Component } from "react";
import { baseURL } from '../services/asyncHelper'
import {Link} from 'react-router-dom'

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(baseURL + "login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        window.localStorage.setItem("token", json.jwt);
        this.props.login(json.user);
      });
  };

  handleOauthLogin = (event) => {
    // loginUserOAuth();
  };

  render() {
    return (
      <div>
        <form id="login" onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="text"
            onChange={this.handleChange}
            placeholder="username"
          />
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="password"
          />
          <input type="submit" />
        </form>
        <div id="oauth-login">
          <button name="google" onClick={this.handleOauthLogin}>
            Google
          </button>
          <button name="facebook" onClick={this.handleOauthLogin}>
            FB
          </button>
          <button name="twitter" onClick={this.handleOauthLogin}>
            Twitter
          </button>
        </div>
        <div>Sign Up</div>
        <Link to="/create-account">Sign Up</Link>
      </div>
    );
  }
}

export default LoginForm
