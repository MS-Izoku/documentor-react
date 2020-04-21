import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from "./Containers/AppHeader";
import { baseURL } from "./services/asyncHelper";
import "./App.css";

//#region Pages
import CreateAccountPage from "./Pages/CreateAccountPage";
import Error404Page from "./Pages/Error404Pages";
////#endregion

class App extends Component {
  state = {
    user: {
      username: "",
      profile_img: "",
    },
    loggedIn: window.localStorage.token !== undefined,
  };

  logIn = (userObj) => {
    this.setState({ loggedIn: true, user: userObj });

    debugger;

    console.log("Logging In", userObj.username);
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
        />
        <Route path="/"></Route>
        <Route path="/create-account">
          <CreateAccountPage login={this.login} />
        </Route>
        <Route path="*">
          <Error404Page />
        </Route>
        <p>This is the content body</p>
      </Router>
    );
  }
}

export default App;
