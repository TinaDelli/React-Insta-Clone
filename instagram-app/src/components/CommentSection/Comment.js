import React from "react";
import './comment.scss'


const Comment = props => {
    console.log(props)
    return <div className="comment">
       <p><span>{props.username}</span> 
       {props.text}</p>
    </div>
}

export default Comment;