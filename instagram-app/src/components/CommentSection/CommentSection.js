import React from 'react';
import Comment from '../CommentSection/Comment'

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            comments: props.post.comments
        }

    }

    // addComment = event => {
    //     event.preventDefault();
    //     this.setState({
    //       data: [...this.state.comments],
    //       data:{
    //         comment:"",
    //         id: Date.now(),
    //       }

    

    render(){
        return (
        <div className="comments">
         {this.state.comments.map((comment) => (
             <Comment username={comment.username} text={comment.text} key={comment} />
         ))}
        </div>
        )
    }
}

export default CommentSection;