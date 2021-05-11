import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { getPosts, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';


const Home = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const history = useHistory();


    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const searchPost = () => {
        if (search.trim()) {
            dispatch(getPostsBySearch(search));
            history.push(`/posts/search?searchQuery=${search}`);
        } else {
            history.push('/');
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };


    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={7} >
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search by dog's name" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                            <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;