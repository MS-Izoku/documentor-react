import React from 'react'

export default (props) =><div className="forum-home-thread">
    <h2>{props.title === undefined ? "Forum Thread Title" : props.title}</h2>
    <p>{props.content === undefined ? "..." : props.content}</p>
</div>