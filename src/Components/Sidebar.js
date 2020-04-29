import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
    constructor(){
        super()
        this.state={
            toggled: false
        }
    }
  render() {
    return (
      <div className={"page-overlay " + (this.props.toggled ? "" : "hidden")} onClick={this.props.toggleSidebar}>
        <aside className={this.props.toggled ? "" : "hidden"}>
          SIDE BAR
          <ul>
            <li>
              <Link to="/homae">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/forums">Forums</Link>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}
