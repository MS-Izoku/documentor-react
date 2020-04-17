import React, { Component } from "react";
import AppHeader from "./Containers/AppHeader";
import "./App.css";

class App extends Component {
  state = {
    user: {
      username: "",
      profile_img: "",
    },
    loggedIn: false,
  };

  logIn = () => {
    this.setState({ loggedIn: true });
  };

  logOut = () => {
    this.setState({ loggedIn: false });
  };

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
