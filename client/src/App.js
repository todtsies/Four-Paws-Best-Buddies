import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    const font = "'Newsreader', serif";
    const theme = createMuiTheme({
        typography: {
            fontFamily: font,
        }
    });
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Container maxWidth="xl">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={() => <Redirect to="/posts" />} />
                        <Route path="/posts" exact component={Home} />
                        <Route path="/posts/search" exact component={Home} />
                        <Route path="/posts/:id" exact component={PostDetails} />
                        <Route path="/auth" exact component={Auth} />
                    </Switch>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;