import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

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
        <div className="wrapper">
        <button onClick={this.props.toggleSidebar}>SideBar</button>
        <UserArea
          user={this.props.user}
          logOut={this.props.logOut}
          toggleLoginModal={this.props.toggleLoginModal}
        />
        </div>
      </header>
    );
  }
}

const UserArea = (props) => {
  return (
    <div id="user-nav">
      <div id="avatar">
        {props.user.profilePic ? <img src={props.user.profilePic} alt="avatar-pic"/> : null}
      </div>
      <p>{props.user.username !== undefined ? props.user.username : "Log In"}</p>
      {/* <img id="avatar" alt="avatar" src=""/>
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
      </button> */}
    </div>
  );
};
