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
      <form onSubmit={this.handleSubmit}>
        <header>
          <h2>Sign Up</h2>
        </header>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            autoComplete="username"
            placeholder="Username"
          />
        </div>

        {this.state.errors.usernameError === null
          ? null
          : ErrorHandler(this.state.errors.usernameError)}

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="password"
          />
        </div>

        {this.state.errors.passwordError === null
          ? null
          : ErrorHandler(this.state.errors.passwordError)}

        <div>
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            name="passwordConfirmation"
            type="password"
            placeholder="password"
          />
        </div>
        {this.state.errors.passwordConfirmationError === null
          ? null
          : ErrorHandler(this.state.errors.passwordConfirmationError)}

        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            autoComplete="email"
            placeholder="email"
          />
        </div>
        {this.state.errors.emailError === null
          ? null
          : ErrorHandler(this.state.errors.emailError)}

        <footer>
          <input type="submit" />
        </footer>
      </form>
    );
  }
}

const ErrorHandler = (errorMessage) => {
  return <div>{errorMessage}</div>;
};
