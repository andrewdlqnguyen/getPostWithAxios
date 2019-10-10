import React, { Component } from 'react';
import {Row, Container, Modal, Button} from 'react-bootstrap';
import './LatestProjects.css';
import Projects from '../Projects';


class LatestProjects extends Component {
   
    // Should be placed in Home page
    state = {
        projectSelected: false,
        loading: false,
    }

    projectOpenHandler = () => {
        console.log("YAS");
        this.setState({projectSelected: true});
    }

    projectClosedHandler = () => {
        this.setState({projectSelected: false});
    }

    render() {
        return(
        <div>
            <Container>
                <Row >
                    <Projects
                        selected={this.projectOpenHandler}/>
                </Row>
            </Container>

            <Modal
                show={this.state.projectSelected}
                // modalclosed={this.projectClosedHandler}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Project Title
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Date Made - Demo - GitHub</h4>
                    <p>
                        Projects body information
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button >Close</Button>
                </Modal.Footer>
                </Modal>
        </div>   
        );
    }
}

export default LatestProjects;