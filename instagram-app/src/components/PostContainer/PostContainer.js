import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';
import styled from 'styled-components';

const PostCard = styled.div`
display:flex;
    flex-direction:column;
    text-align:left;
    margin: 2rem 24.2rem;
    border:1px solid #e6e6e6;
    border-radius:0.2rem;
    // box-shadow: 0px 2px 2px 2px grey;
    font-size:1rem;
    background:white;

    .likes{
        font-weight:600;
        margin-top: 0.5rem;
    }

    .likes-icon{
        margin-top:0.5rem;
    }

    .likes-icon i{
        padding-right:0.5rem;
        font-size:1.6rem;
    }

    .fa-comment{
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1);
    }
    .bottom-post {
        padding-left:1rem;
        margin-bottom:1rem;
        font-size:0.8rem;
    }
`

const PostHeader = styled.h3` 
display:flex;
        padding-left:1rem;
        font-size:0.9rem;
        color: #262626;

        span{
           align-self:center;
        }
`;

const ImgStyle = styled.img`
margin-right:1rem;;
border-radius: 5rem;
max-width:2rem;
max-height:2rem;
`

const PostContainer = props => {

    return <div className="post-container">
    
        {props.posts.map(post => {
            return (
            <>
                <PostCard>
                    <PostHeader >
                        <ImgStyle src={post.thumbnailUrl} alt={post.username} /><span>{post.username}</span>
                    </PostHeader>  
                    
                    <img className="post-img" src={post.imageUrl} alt={post.username} />
                    
                    <div className="bottom-post">
                        <CommentSection post={post} addNewLikes={props.addNewLikes} likes={post.likes} key={post.id} /> 
                    </div>
                </PostCard>
            </>
            )})};
    </div>
     
}


export default PostContainer;