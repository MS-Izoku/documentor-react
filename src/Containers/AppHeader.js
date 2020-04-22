import React, { Component } from "react";
import LoginForm from "./LoginForm.js";
// import CreateAccountForm from './CreateAccountForm'

export default class AppHeader extends Component {
  constructor() {
    super();
    this.state = {
      loginModalActive: false,
    };
  }

  toggleModal = () => {
    this.setState({ loginModalActive: !this.state.loginModalActive });
  };

  render() {
    return (
      <header id="page-header">
        {/* <div
          id="login-area"
        >
          {this.props.loggedIn ? (
            <UserArea
              user={this.props.user}
              logOut={this.props.logOut}
              toggleModal={this.toggleModal}
            />
          ) : (

          )}
        </div> */}
        <UserArea
          user={this.props.user}
          logOut={this.props.logOut}
          toggleModal={this.toggleModal}
        />

        <LoginForm
          login={this.props.login}
          style={{
            color: "blue",
            background: "yellow",
            visibility: this.state.loginModalActive ? "" : "hidden"
          }}
        />
      </header>
    );
  }
}

const UserArea = (props) => {
  return (
    <div id="user-area">
      <button
        onClick={() => {
          localStorage.token === undefined
            ? props.toggleModal()
            : props.logOut();
        }}
      >
        {props.user.username === undefined ? "Log In" : props.user.username}
      </button>
    </div>
  );
};
