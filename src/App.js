import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from "./Containers/AppHeader";
import { baseURL } from "./services/asyncHelper";
import LoginModal from "./Containers/LoginModal";
import Sidebar from "./Components/Sidebar";
//import "./App.css";
import "./css/Neumorphic.css";

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
    sidebarActive: false,
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

  toggleSidebar = () => {
    this.setState({ sidebarActive: !this.state.sidebarActive });
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
          toggleSidebar={this.toggleSidebar}
        />
        <Sidebar
          toggled={this.state.sidebarActive}
          toggleSidebar={this.toggleSidebar}
        />
        <LoginModal
          login={this.login}
          toggleLoginModal={this.toggleLoginModal}
          style={{
            visibility: this.state.loginModalActive ? "" : "hidden",
          }}
        />
        <Route path="/404" component={Error404Page} />
        <Route exact path="/" component={HomePage} />
        <Route path="/create-account">
          <CreateAccountPage login={this.login} />
        </Route>

        <div className="logo" />
        <button className="circle">X</button>
      </Router>
    );
  }
}

export default App;
