import React from "react"
import "./style.scss"

function Nav() {
    return (
        <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
                <span className="uk-button  uk-margin-small-right" type="button" data-uk-toggle="target: #offcanvas-push" uk-icon="icon: table"></span>
            </div>
           
            <div class="uk-navbar-center"><header>Samuel Yu</header></div>

            <div className="uk-navbar-right">
    
                <ul className="uk-navbar-nav">
                    <li>
                        <a href="https://github.com/yusungsamuel" data-uk-icon="icon:github"></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/samuel-yu-1431b8103/" data-uk-icon="icon:linkedin"></a>
                    </li>
                    <li>
                        <a href="/" data-uk-icon="icon: folder"></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;