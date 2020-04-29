import React, { Component } from "react";

export default class ForumContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 0,
          title: "Forum Post Title",
          content: "Forum Post Content goes Here!",
        },
        {
          id: 1,
          title: "Forum Post Title",
          content: "Forum Post Content goes Here!",
        },
        {
          id: 2,
          title: "Forum Post Title",
          content: "Forum Post Content goes Here!",
        },
        {
          id: 3,
          title: "Forum Post Title",
          content: "Forum Post Content goes Here!",
        },
        {
          id: 4,
          title: "Forum Post Title",
          content: "Forum Post Content goes Here!",
        },
        {
          id: 5,
          title: "Forum Post Title",
          content: "Forum Post Content goes Here!",
        },
        {
          id: 6,
          title: "Forum Post Title",
          content: "Forum Post Content goes Here!",
        },
      ],
    };
  }
  render() {
    return <div></div>;
  }
}
