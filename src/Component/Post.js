import React, { useEffect, useState } from 'react';
import { Typography as h3, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import Comments from './Comments';
import blogPicture from '../picture/blog-thambnail.jpg'

const Post = () => {
    const { postId } = useParams();
    const [article, setArticle] = useState({});
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticle(data))
    }, []);
    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(commentUrl)
            .then(response => response.json())
            .then(data => setComment(data));
    }, []);



    const postStyle = {
        width: '100%',
        maxWidth: '700px',
        margin: 'auto',
        marginTop: '15px',
    }
    const useStyles = makeStyles({
        root: {
            maxWidth: '100%',
        },
        media: {
            height: 160,
        },
    });
    const classes = useStyles();
    return (
        <div style={postStyle}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={blogPicture}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {article.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {article.body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => alert('working on it...')} size="small" color="primary">
                        Share
                    </Button>

                </CardActions>


            </Card>

            {
                comment.map(singleComment => <Comments comment={singleComment}></Comments>)
            }
        </div>
    );
};

export default Post;