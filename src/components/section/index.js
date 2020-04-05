import React from "react";
import "./style.scss";

function Section(props){
    return (
        <div className={PaymentResponse.className}>
            {props.children}
        </div>
    )
}

export default Section;