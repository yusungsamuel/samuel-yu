import React from "react";
import "./style.scss"

function Card(props) {
    return (
        <div className="card uk-card uk-card-default">
            <div className="uk-card-media-top">
                <img src={props.background} alt={props.title} />
            </div>
            <div className="uk-card-body">
                <p className="title">{props.title}</p>
    <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;