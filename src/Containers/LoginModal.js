import React, { Component } from "react";
import { baseURL } from "../services/asyncHelper";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import ExitButton from "../Components/ExitButton";

class LoginModal extends Component {
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

  ignoreClick = (event) =>{
    event.stopPropagation();
  }

  render() {
    return (
      <div
        id="login-area"
        style={this.props.style ? this.props.style : {}}
        className="page-overlay"
        onClick={this.props.toggleLoginModal}
      >
        <form id="login" className="nu-form w-25" onSubmit={this.handleSubmit} onClick={this.ignoreClick}>
          <ExitButton closeOut={this.props.toggleLoginModal}/>
          <input
            name="username"
            type="text"
            className="nu-input"
            onChange={this.handleChange}
            placeholder="username"
          />
          <input
            name="password"
            type="password"
            className="nu-input"
            onChange={this.handleChange}
            placeholder="password"
          />
          <input type="submit" className="nu-button" />

          <div id="oauth-login">
            <MDBIcon fab icon="google" size="lg" />
            <MDBIcon fab icon="facebook-square" size="lg" />
            <MDBIcon fab icon="twitter-square" size="lg" />
          </div>
          <Link to="/create-account" onClick={this.props.toggleLoginModal}>Sign Up</Link>
        </form>
      </div>
    );
  }
}

export default LoginModal;
