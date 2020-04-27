import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

export default class LoginForm extends Component {
  render() {
    return (
      <form
        className="neu-form neu-container"
        id="login-form"
        onSubmit={this.handleSubmit}
        onClick={this.ignoreClick}
      >
     
          <h2 className="title">Sign In</h2>
      
   
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            onChange={this.handleChange}
            placeholder="Username"
          />
      
      
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
      

        <div id="oauth-login">
          <a href="#">Google</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
  
          <input type="submit" />
     
      </form>
    );
  }
}
