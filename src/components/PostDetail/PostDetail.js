import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {Id} = useParams()
    const [post,setPost] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }
    ,[])
    const {title,body}= post;
    const postStyle = {
        border:'1px solid lightGray',margin:'20px',padding:'20px',borderRadius:'20px'
    }
    return (
        <div style={postStyle}>
            <h1>This is postDetail {Id}</h1>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Body:</strong> {body}</p>
            <Comments></Comments>
        </div>
    );
};

export default PostDetail;