import React from "react";

export default (props) => (
  <div className="forum-post-comment">
    <p>{props.content === undefined ? "--No Comment--" : props.content}</p>
  </div>
);
