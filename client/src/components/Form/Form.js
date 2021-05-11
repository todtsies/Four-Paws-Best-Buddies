/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';

import { createPost, updatePost } from '../../actions/posts.js';
import useStyles from './styles.js';

const services = [
    {
        value: 'Daycare',
        label: 'Daycare',
      },
      {
        value: 'Boarding',
        label: 'Boarding',
      },
      {
        value: 'Grooming',
        label: 'Grooming',
      },
];

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ dogsName: '', message: '', breed: '', service: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    
    useEffect(() => {
        if (!post?.dogsName) clear();
        if (post) setPostData(post);
      }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ dogsName: '', message: '', breed: '', service: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost({ ...postData, name: user?.result?.name }, history));
            clear();
        } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
        }
    };

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to add your own dog and interact with other posts.
                </Typography>
            </Paper>
        );
    };

   
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? `Editing "${post?.dogsName}"` : 'Add your Pup'}</Typography>
                
                <TextField name="dogsName" variant="outlined" label="Dog's Name" fullWidth value={postData.dogsName} onChange={(e) => setPostData({ ...postData, dogsName: e.target.value })} />
                
                <TextField name="message" variant="outlined" label="Describe your pup!" fullWidth multiline rows={3} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                
                <TextField name="service" select variant="outlined" label="Select Service" fullWidth value={postData.service} onChange={(e) => setPostData({ ...postData, service: e.target.value })}   > {services.map((option) => ( <MenuItem key={option.value} value={option.value}> {option.label} </MenuItem> ))} </TextField>
                 
                <TextField className={classes.breed} name="breed" variant="outlined" label="#Breed (no spaces, comma separated)" fullWidth value={postData.breed} onChange={(e) => setPostData({ ...postData, breed: e.target.value.split(',') })} />
            
                <Typography align="center" variant="caption">Please compress images to less than 100KB before upload.</Typography>
            
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}/></div>
                
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
               
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
            
        </Paper>
    );
};

export default Form;