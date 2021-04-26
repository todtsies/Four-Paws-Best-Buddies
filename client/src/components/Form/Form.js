import React, { useStat } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles();
    
    const handleSubmit = () => {

    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">Add your Pup</Typography>
            <TextField 
                name="creator" 
                variant="outlined" 
                label="Your Name" 
                fullWidth
                value={postData.creator}
                onChange={}
            />
            </form>
            
        </Paper>
    );
}

export default Form;