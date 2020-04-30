import React, { Component } from "react";

export default class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  render() {
    return (
      <form
        className="searchbar neu-container inset"
        onSubmit={(event) => {
          event.preventDefault();
          if (this.props.onSubmit !== undefined) this.props.onSubmit(event);
        }}
      >
        <div className="wrapper">
          <input
            type="text"
            name="input"
            className="search-input"
            onChange={(event) => {
              this.setState({ input: event.target.value });
            }}
          />
          <input type="submit" />
        </div>
      </form>
    );
  }
}
