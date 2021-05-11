/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

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

        <img className={classes.media} src={post.selectedFile} alt={post.selectedFile} />

    );
};

export default PostDetails;