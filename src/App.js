import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from "./Containers/AppHeader";
import { baseURL } from "./services/asyncHelper";
import LoginModal from "./Containers/LoginModal";
import "./App.css";

//#region Pages
import CreateAccountPage from "./Pages/CreateAccountPage";
import Error404Page from "./Pages/Error404Page";
import HomePage from "./Pages/HomePage";
////#endregion

class App extends Component {
  state = {
    user: {
      username: undefined,
      profile_img: undefined,
    },
    loggedIn: window.localStorage.token !== undefined,
    loginModalActive: false,
  };

  logIn = (userObj) => {
    this.setState({ loggedIn: true, user: userObj });
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.setState({
      loggedIn: false,
      user: {
        username: "",
      },
    });
  };

  toggleLoginModal = () => {
    this.setState({ loginModalActive: !this.state.loginModalActive });
  };

  componentDidMount() {
    if (localStorage.token)
      fetch(baseURL + "/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((resp) => resp.json())
        .then((user) => {
          this.setState(user);
        });
    else {
    }
  }

  render() {
    return (
      <Router>
        <AppHeader
          user={this.state.user}
          loggedIn={this.state.loggedIn}
          login={this.logIn}
          logOut={this.logOut}
          toggleLoginModal={this.toggleLoginModal}
        />
        <LoginModal
          login={this.login}
          toggleLoginModal={this.toggleLoginModal}
          style={{
            visibility: this.state.loginModalActive ? "" : "hidden",
          }}
        />
        <Route exact path="/" component={HomePage} />
        <Route path="/create-account">
          <CreateAccountPage login={this.login} />
        </Route>

        <p>This is the content body</p>
      </Router>
    );
  }
}

export default App;
