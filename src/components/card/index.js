import React from "react";
import "./style.scss"

function Card(props) {
    return (
        <div className="card uk-card uk-card-default" data-uk-tooltip="drag to place this project in a different order">
            <div className="uk-card-media-top">
                <img src={process.env.PUBLIC_URL + props.background} alt={props.title} />
            </div>
            <div className="uk-card-body">
                <div className="icon">
                    <a href={props.url} class="uk-icon-button" data-uk-icon="icon: github-alt; ratio: 2"></a>
                    {props.link? <a href={props.link} class="uk-icon-button" data-uk-icon="icon: link; ratio: 2"></a>: null}
                </div>
                <p className="title">{props.title}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;