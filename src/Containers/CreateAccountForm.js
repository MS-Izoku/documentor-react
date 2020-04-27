import React, { Component } from "react";
import { baseURL } from "../services/asyncHelper";

export default class CreateAccountForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      email: "",

      errors: {
        usernameError: null,
        passwordError: null,
        passwordConfirmationError: null,
        emailError: null,
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.passwordIsValid() && this.emailISValid)
      fetch(baseURL + "/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
        },
      })
        .then((resp) => resp.json())
        .then((json) => {
          this.props.login(json);
          localStorage.setItem("token", json.token);
        });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  emailISValid = () => {
    return true;
  };

  passwordIsValid = () => {
    const [password, passwordConfirmation] = this.state;
    if (passwordConfirmation === password) {
      return true;

      // quick validation checks, handle it on backend?
    } else return false;
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="neu-form neu-container"
        id="create-account-form"
      >
       
          <h2 className="title">Sign Up</h2>
        
      
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            autoComplete="username"
            placeholder="Username"
          />
       

        {this.state.errors.usernameError === null
          ? null
          : ErrorHandler(this.state.errors.usernameError)}

   
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Password"
          />
      

        {this.state.errors.passwordError === null
          ? null
          : ErrorHandler(this.state.errors.passwordError)}

      
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            name="passwordConfirmation"
            type="password"
            placeholder="Confirm Password"
          />
    
        {this.state.errors.passwordConfirmationError === null
          ? null
          : ErrorHandler(this.state.errors.passwordConfirmationError)}

       
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            autoComplete="email"
            placeholder="Email Address"
          />
      
        {this.state.errors.emailError === null
          ? null
          : ErrorHandler(this.state.errors.emailError)}

        <input type="submit" />
      </form>
    );
  }
}

const ErrorHandler = (errorMessage) => {
  return <div>{errorMessage}</div>;
};
