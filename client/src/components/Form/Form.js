import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, MenuItem } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';

const services = [
    {
        value: 'daycare',
        label: 'Daycare',
      },
      {
        value: 'boarding',
        label: 'Boarding',
      },
      {
        value: 'grooming',
        label: 'Grooming',
      },
];

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', dogsName: '', message: '', breed: '', service: '', selectedFile: '' });
    const classes = useStyles();
    
    const handleSubmit = () => {

    }
    
    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Add your Pup</Typography>
                <TextField name="creator" variant="outlined" label="Your Name" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="dogsName" variant="outlined" label="Dog's Name" fullWidth value={postData.dogsName} onChange={(e) => setPostData({ ...postData, dogsName: e.target.value })} />
                <TextField name="message" variant="outlined" label="Describe your pup!" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="service" select variant="outlined" label="Select Service" fullWidth value={postData.service} onChange={(e) => setPostData({ ...postData, service: e.target.value })}   > {services.map((option) => ( <MenuItem key={option.value} value={option.value}> {option.label} </MenuItem> ))} </TextField>
                <TextField name="breed" variant="outlined" label="Breed" fullWidth value={postData.breed} onChange={(e) => setPostData({ ...postData, breed: e.target.value })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}/></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
            
        </Paper>
    );
}

export default Form;