import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);
  const handleLike = async () => {
    dispatch(likePost(post._id));
    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };
  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }
    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };
  const openPost = (e) => {
    // dispatch(getPost(post._id, history));
    history.push(`/posts/${post._id}`);
  };

  const theme = createTheme({
        overrides: {
            overlay: {
                opacity: 0.5,
            }
        }
    });
    const scrollToEdit = () => {
        window.scrollTo({
          top: 280,
          behavior: "smooth"
        });
      };

    return (
        <Card className={classes.card}>
            <ButtonBase
                name="enlargeImage"
                className={classes.cardAction}
                onClick={openPost}
            >
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                <ThemeProvider theme={theme}>
                    <div className={classes.overlay}>
                        <Typography fontWeight="fontWeightLight" variant="h6">{post.name}</Typography>
                        <Typography fontWeight="fontWeightLight" variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                    </div>
                </ThemeProvider>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <div className={classes.overlay2}>
                    <Button style={{ color: 'white' }} size="small" onClick={(e) => {
                        e.stopPropagation();
                        scrollToEdit();
                        setCurrentId(post._id);
                    }}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </div>
            )}

            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.breed.map((breed) => `#${breed} `)}</Typography>
                <Typography variant="body2">{post.service}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" component="h2" >{post.dogsName}</Typography>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>

                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" /> Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default Post;