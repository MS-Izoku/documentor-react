import React from 'react'
import { MDBIcon} from 'mdbreact' 
export default (props) =><div className="thread neu-container">
    <h2>{props.title === undefined ? "Forum Thread Title" : props.title}</h2>
    <p>{props.content === undefined ? "..." : props.content}</p>
    <div className="wrapper">
        <div className="like-count">
             {props.likeCount === undefined ? 0 : props.thread.likeCount}
        </div>
        <div className="comment-count">
             {props.postCount === undefined ? 0 : props.thread.postCount}
        </div>
        <MDBIcon far icon="bookmark" />
    </div>
</div>