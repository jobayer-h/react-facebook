import React, { useState, useEffect } from 'react';
import Newsfeed from './Newsfeed'
import { Grid } from '@material-ui/core';

const Home = () => {

    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])
    const gridStyles ={
        marginTop:'10px'
    }
    const [spacing, setSpacing] = React.useState(9);
    return (
        <Grid style={gridStyles} item xs={12}>
            <Grid container justify="center" spacing={spacing}>
                {
                    post.map(singlePost => <Newsfeed post={singlePost}></Newsfeed>)
                }
            </Grid>
        </Grid>
    );
};

export default Home;