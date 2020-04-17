import React, { Component } from "react";
import AppHeader from "./Containers/AppHeader";
import { baseURL } from "./services/asyncHelper";
import "./App.css";

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
    this.setState({ loggedIn: false });
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
      <>
        <AppHeader
          user={this.state.user}
          loggedIn={this.state.loggedIn}
          login={this.logIn}
          logOut={this.logOut}
        />
        <p>This is the content body</p>
      </>
    );
  }
}

export default App;
