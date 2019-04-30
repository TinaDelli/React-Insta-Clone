import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';

const PostContainer = props => {

    return <div className="post-container">
    
        {props.posts.map(post => {
            return (
            <>
                <div className="post">
                    <h3 className="post-header">
                        <img className="thumbnail" src={post.thumbnailUrl} alt={post.username} /><span>{post.username}</span>
                    </h3>  
                    
                    <img className="post-img" src={post.imageUrl} alt={post.username} />
                    
                    <div className="bottom-post">
                        <CommentSection post={post} addNewLikes={props.addNewLikes} likes={post.likes} key={post.id} /> 
                    </div>
                </div>
            </>
            )})};
    </div>
     
}


export default PostContainer;