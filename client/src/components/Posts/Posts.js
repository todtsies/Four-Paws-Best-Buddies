import React from 'react';
import { Grid, CircularProgress, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import Post from './Post/Post'

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) {
    return (
      <Paper variant='outlined' className={classes.noPostsMessage} >
        <h1 align="center" style={{ color: 'black', fontWeight: "100" }}>Sorry <SentimentVeryDissatisfiedIcon fontSize="default" /> No dogs to see here right now.</h1>
      </Paper>
    )
  };
  console.log(isLoading);

  return (
    !posts?.length || isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} >
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts;