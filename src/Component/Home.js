import React, { useState, useEffect } from 'react';
import Newsfeed from './Newsfeed'

const Home = () => {

    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    },[])
    // console.log(post);

    return (
        <div>
            {
                post.map( singlePost => <Newsfeed post={singlePost}></Newsfeed>)
            }
        </div>
    );
};

export default Home;