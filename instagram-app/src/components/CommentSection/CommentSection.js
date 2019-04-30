import React from 'react';
import Comment from '../CommentSection/Comment'
import './comment.scss';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            comments: props.post.comments,
            timestamp: props.post.timestamp,
            newComments: {
                username:"",
                text:" "
            }
        }

    }

    handleText = event => {
        this.setState({
            ...this.state.comments,
            [event.target.name]: event.target.value
        })
    }

    addComment = event => {
        event.preventDefault();
        this.setState({
          ...this.state.comments,
           newComments:{
               text:""
           }
          })

        }

    // checkComment = text =>{
    //     this.setState({
    //         comments: this.state.comments.map(comment =>(
    //             comment.text === text ? {...comment, text: !text} : comment)
    //         )
    //     })
    // }

    render(){
        return (
        <div className="comments">
         {this.state.comments.map((comment) => (
             <Comment username={comment.username} text={comment.text} key={comment} />
         ))}
         <span className="timestamp">{this.state.timestamp}</span>
         <form onSubmit={this.addComment}>
        <input
        placeholder="Add a comment..."
        value={this.state.text}
        onChange={this.handleText}
        name="text"
        required
        />
        <button>...</button>
        </form>
        </div>
        )
    }
}

export default CommentSection;