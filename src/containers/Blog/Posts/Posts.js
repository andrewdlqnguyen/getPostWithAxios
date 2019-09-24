import React, { Component } from 'react';
import axios from '../../../axios';
//import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => { // after fetching the data is complete, the data will get stored in the response function and it will get executed.
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts }); // should be inside the then() method since the data wouldnt be done fetching if it's written outside of this call.
                //console.log(response);
                //console.log(updatedPosts);
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    // postSelectedHandler = (id) => {
    //     this.setState({ selectedPostId: id });
    // }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/' + id});
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went Wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //<Link to={'/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            key={post.id}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    //</Link>);
            )});
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;