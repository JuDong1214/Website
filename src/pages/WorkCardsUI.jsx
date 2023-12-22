import React from 'react'
import './WorkCard-styles.css'

const  Card = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="1" className="card-img-topp"/>
            </div>
            <div className="card-body text-dark">
                <h4 style={{fontSize: '20px'}} className="card-title">{props.title}</h4>
                <p style={{fontSize: '20px'}} className="card-text text-secondary">
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default Card;
