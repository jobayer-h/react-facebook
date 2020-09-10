import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import blogPicture from '../picture/blog-thambnail.jpg'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Newsfeed(props) {
  const classes = useStyles();


  const { title, body, id, userId } = props.post;

  return (


    <Grid item>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} src={`https://randomuser.me/api/portraits/med/men/${userId}.jpg`}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon onClick={() => alert('working on it...')} />
            </IconButton>
          }
          title={title}
        />
        <CardMedia
          className={classes.media}
          image={blogPicture}
          title="Thumbnail Image"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={() => alert('working on it...')} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon onClick={() => alert('working on it...')} />
          </IconButton>

          <Link to={`post/${id}`}>
            <Button variant="contained" color="primary">
              See More
            </Button>
          </Link>

        </CardActions>

      </Card>
    </Grid>
  );
}
