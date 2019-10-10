import React, { Component } from'react';
import {Row, Container} from 'react-bootstrap';
import axios from 'axios';
import Project from '../Project/Project';

class Projects extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('https://api.myjson.com/bins/175mc2')
            .then(response => {
                const projects = response.data.slice(0, 3);
                const updatedProjects = projects.map(project => {
                    return {
                        ...project,
                        author: 'Andrew'
                    }
                })
                this.setState({ projects: updatedProjects});
                console.log(updatedProjects);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        let projects = this.state.projects.map(project => {
            return (
                <Project
                    title={project.title}
                    key={project.id}
                    author={project.author}
                    clicked={this.props.selected}
                />
            )
        })
        return(
            <Container>
                <Row>
                    {projects}
                </Row>
            </Container>
        );
    }
}

export default Projects;