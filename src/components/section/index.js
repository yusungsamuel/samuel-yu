import React from "react";
import "./style.scss";

function Section(props){
    return (
        <div id={props.id} className={props.className} data-uk-sortable={props.data}>
            {props.children}
        </div>
    )
}

export default Section;