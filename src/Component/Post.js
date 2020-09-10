import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

const Post = () => {
    const {postId} = useParams();
    const [article,setArticle] = useState({});
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setArticle(data))
    },[]);
    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(commentUrl)
        .then(response => response.json())
        .then(data => setComment(data));
    },[])
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                {article.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {article.body}
            </Typography>
            {
                comment.map(singleComment => <Comments comment={singleComment}></Comments>)
            }
        </div>
    );
};

export default Post;