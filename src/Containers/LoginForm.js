import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

export default class LoginForm extends Component {
  render() {
    return (
      <form
        className="neu-form"
        id="login-form"
        onSubmit={this.handleSubmit}
        onClick={this.ignoreClick}
      >
        <header>
          <h2>Sign In</h2>
        </header>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            onChange={this.handleChange}
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
        </div>

        <div id="oauth-login">
          <MDBIcon fab icon="google" size="lg" />
          <MDBIcon fab icon="facebook-square" size="lg" />
          <MDBIcon fab icon="twitter-square" size="lg" />
        </div>
  
          <input type="submit" />
     
      </form>
    );
  }
}
