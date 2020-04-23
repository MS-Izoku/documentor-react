import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import LoginForm from "./LoginForm.js";
// import CreateAccountForm from './CreateAccountForm'

export default class AppHeader extends Component {
  constructor() {
    super();
    this.state = {
      loginModalActive: false,
    };
  }

  render() {
    return (
      <header id="page-header">
        <UserArea
          user={this.props.user}
          logOut={this.props.logOut}
          toggleLoginModal={this.props.toggleLoginModal}
        />
      </header>
    );
  }
}

const UserArea = (props) => {
  return (
    <div id="user-area">
      <button
        className="nu-button"
        onClick={() => {
          localStorage.token === undefined
            ? props.toggleLoginModal()
            : props.logOut();
        }}
      >
        {props.user.username === undefined ? "Log In" : props.user.username}
        {props.user.profilePic !== undefined ? (
          <img src={props.user.profilePic} alt="profile-pic" />
        ) : (
          <MDBIcon icon="user-circle" />
        )}
      </button>
    </div>
  );
};
