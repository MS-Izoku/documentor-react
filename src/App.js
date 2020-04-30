import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from "./Containers/AppHeader";
import AppFooter from "./Containers/AppFooter";
import { baseURL } from "./services/asyncHelper";
import LoginModal from "./Containers/LoginModal";
import Sidebar from "./Components/Sidebar";


//#region Pages
import CreateAccountPage from "./Pages/CreateAccountPage";
import Error404Page from "./Pages/Error404Page";
import HomePage from "./Pages/HomePage";
import ForumHomePage from "./Pages/ForumHomePage";
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
      sidebarActive: false,
      loginModalActive: false,
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
          sidebarActive={this.state.sidebarActive}
        />
        {/* <Sidebar
          toggled={this.state.sidebarActive}
          toggleSidebar={this.toggleSidebar}
        /> */}
        
        <Route path="/404" component={Error404Page} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/forums" component={ForumHomePage} />
        <Route path="/create-account">
          <CreateAccountPage login={this.login} />
        </Route>
        <AppFooter />
      </Router>
    );
  }
}

export default App;
