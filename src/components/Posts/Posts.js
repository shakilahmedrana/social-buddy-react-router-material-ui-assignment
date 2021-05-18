import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Posts = (props) => {
    const {id,title,body,userId}= props.posts;
    const postsStyle ={
        border:'1px solid gray',margin:'20px',padding:'20px',borderRadius:'20px'
    }
    return (
        
            <div style={postsStyle}>
            <p><strong>Id:</strong> {id}</p>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Body:</strong> {body}</p>
            <p><Button variant ="contained"><Link to={`/PostDetail/${id}`} style={{ textDecoration: 'none' }}>See More</Link></Button></p>
            
        </div>
        
    );
};

export default Posts;