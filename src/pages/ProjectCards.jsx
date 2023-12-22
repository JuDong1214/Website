import React, { Component } from 'react'
import Card from './ProjectCardsUI'
import NBA from './pics/NBA.png'
import website from './pics/website.png'
import speed from './pics/speed.png'
import TACGVAR from './pics/TACG-VAR.png'
import ETH from './pics/ETH.png'
import soon from './pics/soon.jpg'


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
                <Card githubUrl="https://github.com/JuDong1214/Website" 
                    imgsrc={website}
                    title = "Personal Website"
                    skills = 'React, JavaScript, Bootstrap'
                    text="I designed and created my personal website to introduce who I am and to display my projects." />
                <Card githubUrl="https://github.com/JuDong1214/SpeedTyper" 
                    imgsrc={speed}
                    title = "Speed Typer Game"
                    skills = 'JavaScript, HTML, CSS'
                    text="This typing game allowed me to create something that I enjoy playing all while utilizing and practicing the listed technologies." />
                <Card githubUrl="https://github.com/JuDong1214/NBAModel" 
                    imgsrc={NBA}
                    title = "NBA Betting Model"
                    skills = "Python, Selenium"
                    text="I developed a NBA score prediction model using webscrapped data from Selenium. 
                          This project allowed me to combine my love for the NBA and my passion for coding and data analytics
                          to develop something exciting. " />
                <Card githubUrl="https://github.com/JuDong1214/TACG-VAR" 
                    imgsrc={TACGVAR}
                    title = "TACG-VAR"
                    skills = "Python, Bash"
                    text="" />
                <Card githubUrl="https://github.com/JuDong1214/TACG-VAR" 
                    imgsrc={ETH}
                    title = "BuyNSell"
                    skills = "Python, Matlab"
                    text="" />
                <Card githubUrl="https://github.com/JuDong1214" 
                    imgsrc={soon}
                    title = "Project in Development"
                    skills = "Full-Stack"
                    text="Personal project in development, will be finished soon" />
            </div>
        );
    }
}

export default Cards;