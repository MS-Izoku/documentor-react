import React, { Component } from "react";
import {loginUserRegular , loginUserOAuth} from '../services/asyncHelper'

export default class AppHeader extends Component {
  render() {
    return <header>
      <div id="login-area">
        {this.props.loggedIn ? (
          <UserArea user={this.props.user} />
        ) : (
          <LoginForm />
        )}
      </div>
    </header>;
  }
}

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
    event.preventDefault()
    console.log(this.state)
    loginUserRegular(this.state.username , this.state.password)
  };

  handleOauthLogin = (event) =>{
    loginUserOAuth();
  }

  render() {
    return <div>
      <form id="login" onSubmit={this.handleSubmit}>
        <input name="username" type="text" onChange={this.handleChange} placeholder="username" />
        <input name="password" type="password" onChange={this.handleChange} placeholder="password" />
        <input type="submit"/>
      </form>
        <div id="oauth-login">
            <button name="google" onClick={this.handleOauthLogin}>Google</button>
            <button name="facebook" onClick={this.handleOauthLogin}>FB</button>
            <button name="twitter" onClick={this.handleOauthLogin}>Twitter</button>
        </div>
    </div>;
  }
}

class UserArea extends Component {
  render() {
      return <div>

      </div>
  }
}
