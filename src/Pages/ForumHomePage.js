import React, { Component } from "react";

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
      <div>
        {this.state.threads.map((thread) => {
          return <ForumHomeThread thread={thread} />;
        })}
      </div>
    );
  }
}
