import React, { Component } from 'react';
//import axios from 'axios';
import {Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from '././Posts/Posts';
// import NewPost from './NewPost/NewPost';

import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';
import LatestProjects from '../../components/PersonalWeb/Projects/LatestProjects/LatestProjects';

// This is only called when needed inside the code. Thus at the bottom,
// this is called when authenication passes and newPost needs to be rendered.
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                            <li><NavLink 
                                to="/latest-projects/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Latest Projects</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/>: null }
                    <Route path="/posts" component={Posts}/> 
                    <Route path="/latest-projects" component={LatestProjects}/>     
            <Route render={() => <h1>Not Found</h1>}/>
                    {/* <Redirect from="/" to="/posts"/> */}
                </Switch>               
                </div>
        );
    }
}

export default Blog;