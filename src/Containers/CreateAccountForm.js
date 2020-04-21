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
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.passwordIsValid() && this.emailISValid)
      fetch(baseURL + "/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "applicaiton/json",
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
    } else return false;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" type="text" />
        <input name="password" type="password" />
        <input name="passwordConfirmation" type="password" />
        <input name="email" type="text" />
        <input type="submit" />
      </form>
    );
  }
}
