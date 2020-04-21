import React, { Component } from "react";
import LoginForm from "./LoginForm.js";
// import CreateAccountForm from './CreateAccountForm'

export default class AppHeader extends Component {
  render() {
    return (
      <header>
        <div id="login-area">
          {this.props.loggedIn ? (
            <UserArea user={this.props.user} logOut={this.props.logOut} />
          ) : (
            <LoginForm login={this.props.login} />
          )}
        </div>
      </header>
    );
  }
}

const UserArea = (props) => {
  return (
    <div>
      <h2>{props.user.username}</h2>
      <button onClick={props.logOut}>Log Out</button>
    </div>
  );
};
