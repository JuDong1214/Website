import React from 'react';
import './Projects.css';
import Cards from './ProjectCards'; // Import the Cards component

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <Cards />    
        </div>
    );
}

export default Projects;