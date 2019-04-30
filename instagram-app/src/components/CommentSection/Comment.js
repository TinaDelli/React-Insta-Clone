import React from "react";
import './comment.scss'

// class Comment extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             comment: []
//         };
//     }
//     render(){
//         return (
//             <div>
//                 {this.props.comment}
//             </div>
//         )
//     }
// }

const Comment = props => {
    console.log(props)
    return <div className="comment">
       <p><span>{props.username}</span> 
       {props.text}</p>
        {/* <form onSubmit={props.addComment}>
        <input
        placeholder="Add A Comment"
        value={props.comment.comment}
        />
        <button>Comment</button>
        </form> */}
    </div>
}

export default Comment;