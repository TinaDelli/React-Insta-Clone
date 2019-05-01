import React from 'react';
import Comment from '../CommentSection/Comment'
import './comment.scss';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            comments: props.post.comments,
            timestamp: props.post.timestamp,
            username:"Bob123",
            text:"",
            likes: this.props.likes
        }
    }
    handleText = event => {
        this.setState({
            text: event.target.value,
        });
    }

    addNewComment = (event) => {
        event.preventDefault();
        this.setState({
          comments:[...this.state.comments, {
              text: this.state.text,
              username: 'Bob123'
          }],
          text: ''
           
          })
    }

      addNewLikes = (event) => {
    event.preventDefault();
    this.setState(prevState =>({
        likes: ++prevState.likes 
  }))
}

    // checkLikes = event =>{
    //     this.setState({
    //         likes: this.state.likes.map(like =>(
    //             if(like)
    //         )
    //     }))
    // }

    render(){
        return (
        <div className="comments">
        <p className="likes-icon"><i className="far fa-heart" onClick={this.addNewLikes}></i><i className="far fa-comment"></i></p>
        <p className="likes">{this.state.likes} likes</p>
         {this.state.comments.map((comment) => (
             <Comment username={comment.username} text={comment.text} key={comment.id} />
         ))}
         <span className="timestamp">{this.state.timestamp}</span>
         <form onSubmit={this.addNewComment}>
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