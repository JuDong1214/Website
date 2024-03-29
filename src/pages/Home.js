import React from 'react';
import './Home.css';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


const Home = () => {
    return (
      <div className="home">
            <h1>
                <Typist cursor={{ show: false, hideWhenDone: false }}>
                   Julian Dong
                </Typist>
            </h1>
      </div>
    );
  }
  
  export default Home;


