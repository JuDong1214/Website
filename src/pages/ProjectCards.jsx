import React, { Component } from 'react'
import Card from './ProjectCardsUI'
import cme from './pics/cme.png'
import aaa from './pics/aaa.jpg'


class Cards extends Component {
    state = {
        fadeInStyle: { opacity: 0 }
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ fadeInStyle: { opacity: 1, transition: 'opacity 1s ease-in-out' } });
        }, 200); // Delay the fade-in effect slightly for it to be noticeable
    }

    render() {
        return (
            // The container is positioned 3/4ths down the page and centered horizontally
            <div className="projects-grid" style={this.state.fadeInStyle}>
                <Card githubUrl="https://github.com/JuDong1214" 
                    imgsrc={aaa}
                    title = "American Automobile Association"
                    text="Here, I worked on creating scripts to automate testing in the company's web applications. 
                        Additionally, I aided in market research and design workshops to generating  innovative software and business concepts.Here, I worked on creating scripts to automate testing in the company's web applications. 
                        Additionally, I aided in market research and design workshops to generating  innovative software and business concepts.Here, I worked on creating scripts to automate testing in the company's web applications. 
                        Additionally, I aided in market research and design workshops to generating  innovative software and business concepts.Here, I worked on creating scripts to automate testing in the company's web applications. 
                        Additionally, I aided in market research and design workshops to generating  innovative software and business concepts." />
                <Card githubUrl="https://github.com/JuDong1214" 
                    imgsrc={cme}
                    title = "CME Group Inc."
                    text="This internship allowed me to gain real world experience in machine learning and data analytics.
                        Working at an exchange, I was immersed in the financial industry, truly learning a lot about trading and the financial market." />
                <Card githubUrl="https://github.com/JuDong1214" 
                    imgsrc={cme}
                    title = "CME Group Inc."
                    text="This internship allowed me to gain real world experience in machine learning and data analytics.
                        Working at an exchange, I was immersed in the financial industry, truly learning a lot about trading and the financial market." />
                <Card githubUrl="https://github.com/JuDong1214" 
                    imgsrc={cme}
                    title = "CME Group Inc."
                    text="This internship allowed me to gain real world experience in machine learning and data analytics.
                        Working at an exchange, I was immersed in the financial industry, truly learning a lot about trading and the financial market." />
                
            </div>
        );
    }
}

export default Cards;