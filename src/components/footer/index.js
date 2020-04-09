import React from "react";
import "./style.scss";

function Footer() {
    return (
        <div className="footer">
            <p>Get In Touch</p>
            <div>
                <a href="mailto:ssyyu@ucdavis.edu?Subject=Hello" data-uk-icon="icon: mail; ratio: 2"></a>
                <a href="https://github.com/yusungsamuel" data-uk-icon="icon: github; ratio: 2"></a>
                <a href="https://www.linkedin.com/in/samuel-yu-1431b8103/" data-uk-icon="icon: linkedin; ratio: 2"></a>
            </div>
        </div>
    )
}

export default Footer;