/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
import { useParams, Link } from 'react-router-dom';

import { getPost } from '../../actions/posts';
import useStyles from './styles';

const PostDetails = () => {
    const { post } = useSelector((state) => state.posts);
    const { id } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    if (!post) return null;



    return (
        <div>
            <img className={classes.media} src={post.selectedFile} alt={post.selectedFile} />
            <Button className={classes.closeButton} component={Link} to="/posts" variant="contained" style={{ color: 'black' }}>
                <CancelIcon fontSize="default" />
            </Button>
        </div>
    );
};

export default PostDetails;