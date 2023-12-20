import React from 'react';
import './About.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './WorkCards';

const About = () => {

  return (
    <div className="about">
      <h1 className="top-text">
        Hi, my name is Julian Dong
      </h1>
      <h1 className="top-text2"> I am a student at the University of Michigan studying Computer Science, graduating May 2024 </h1>

      <h1 className="top-text"> Work Experience </h1>
      <Card/> 
    </div>
  );
};

export default About;