import React from 'react';
import './Project.css';


const project = (props) => (
    <article className="Project" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="CHANGEInfo">
            <div className="CHANGEAuthor">{props.author}</div>
        </div>
    </article>
);

export default project;