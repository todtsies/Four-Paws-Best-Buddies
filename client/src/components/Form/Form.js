import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, MenuItem } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

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
    const [postData, setPostData] = useState({ creator: '', dogsName: '', message: '', breed: '', service: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);
    
    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', dogsName: '', message: '', breed: '', service: '', selectedFile: '' });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Edit' : 'Add'} your Pup</Typography>
                
                <TextField name="creator" variant="outlined" label="Your Name" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                
                <TextField name="dogsName" variant="outlined" label="Dog's Name" fullWidth value={postData.dogsName} onChange={(e) => setPostData({ ...postData, dogsName: e.target.value })} />
                
                <TextField name="message" variant="outlined" label="Describe your pup!" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                
                <TextField name="service" select variant="outlined" label="Select Service" fullWidth value={postData.service} onChange={(e) => setPostData({ ...postData, service: e.target.value })}   > {services.map((option) => ( <MenuItem key={option.value} value={option.value}> {option.label} </MenuItem> ))} </TextField>
                
                <TextField name="breed" variant="outlined" label="Breed (no spaces, comma separated)" fullWidth value={postData.breed} onChange={(e) => setPostData({ ...postData, breed: e.target.value.split(',') })} />
                
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}/></div>
                
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
               
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
            
        </Paper>
    );
}

export default Form;