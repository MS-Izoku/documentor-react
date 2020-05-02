import React, { Component } from "react";
// import { MDBIcon } from "mdbreact";
import Searchbar from '../Components/Searchbar'

import ForumHomeThread from "../Containers/Forum/ForumHomeThread";

export default class ForumHomePage extends Component {
  constructor() {
    super();
    this.state = {
      threads: [
        {
          id: 0,
          title: "Forum Home Thread",
          content: "This is the contend ofa Forum Home-Thread element",
        },
        {
          id: 0,
          title: "Forum Home Thread",
          content: "This is the contend ofa Forum Home-Thread element",
        },
        {
          id: 0,
          title: "Forum Home Thread",
          content: "This is the contend ofa Forum Home-Thread element",
        },
        {
          id: 0,
          title: "Forum Home Thread",
          content: "This is the contend ofa Forum Home-Thread element",
        },
        {
          id: 0,
          title: "Forum Home Thread",
          content: "This is the contend ofa Forum Home-Thread element",
        },
        {
          id: 0,
          title: "Forum Home Thread",
          content: "This is the contend ofa Forum Home-Thread element",
        },
        {
          id: 0,
          title: "Forum Home Thread",
          content: "This is the contend ofa Forum Home-Thread element",
        },
        {
          id: 0,
          title: "Forum Home Thread",
          content: "This is the contend ofa Forum Home-Thread element",
        },
      ],
    };
  }

  componentDidMount() {
    // fetch threads here with paginated response
  }

  render() {
    return (
      <div id="forum-home-page" className="page-area">
        <div className="wrapper">
          <div id="forum-nav" className="neu-container">
            <Searchbar />
            <button>Button!</button>
          </div>
          <div id="threads" className="neu-container">
            {this.state.threads.map((thread) => {
              return <ForumHomeThread thread={thread} />;
            })}
          </div>
        </div>
        
      </div>
    );
  }
}
