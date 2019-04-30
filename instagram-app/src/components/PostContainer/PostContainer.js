import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';

const PostContainer = props => {

    return <div className="post-container">
        {props.posts.map(d => 
        <>
        <div className="post">
        <h3 className="post-header"><img className="thumbnail" src={d.thumbnailUrl} alt={d.username} />{d.username} </h3>  
        <div><img className="post-img" src={d.imageUrl} alt={d.username} /> </div> 
        <div className="bottom-post">
        <div className="likes-icon"><i class="far fa-heart"></i><i class="far fa-comment"></i></div>
        <div className="likes">{d.likes} likes</div>
        <CommentSection post={d} key={d.username} /> 
        <div>{d.timestamp}</div>
        </div>
        </div>
        </>)};
    </div>
     
}


export default PostContainer;