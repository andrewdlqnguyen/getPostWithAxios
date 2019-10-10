import React, { Component } from 'react';
import axios from 'axios';

class FullProject extends Component {

    render() {
        return (
            <div className="FullProject">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
            </div>
        );
    }
}

export default FullProject;