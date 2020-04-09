import React from "react";
import "./style.scss";

function Section(props){
    return (
        <div id={props.id} className={props.className}>
            {props.children}
        </div>
    )
}

export default Section;