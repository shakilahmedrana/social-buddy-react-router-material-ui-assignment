import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Comments = () => {
    const {Id} = useParams()
    const [comment,setComment] = useState([])
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${Id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },
    [])
    const {email,body,postId} = comment
    return (
        <div>
            <h1>This is comments</h1>
            <p>{postId}</p>
            <p><strong>Email: </strong> {email}</p>
            <p><strong>Body: </strong> {body}</p>
        </div>
    );
};

export default Comments;