import React from "react"
import "./style.scss"

function Nav() {
    return (
        <div className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
                <span className="uk-button  uk-margin-small-right" type="button" data-uk-toggle="target: #offcanvas-push" uk-icon="icon: table"></span>
            </div>
            <div className="uk-navbar-right">
                <a href="" className="uk-navbar-item uk-logo"></a>
                <ul className="uk-navbar-nav">
                    <li>
                        <a href="https://github.com/yusungsamuel"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/samuel-yu-1431b8103/"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a><i className="fab fa-dropbox"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;