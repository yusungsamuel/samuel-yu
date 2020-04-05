import React from "react";
import "./style.scss";

function OffCanvas() {
    return (
        <div id="offcanvas-push" data-uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar uk-flex uk-flex-column">

                <button class="uk-offcanvas-close" type="button" data-uk-close></button>

                <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                    <li><h1>Samuel Yu</h1></li>

                    <li><a href="#"><span class="uk-margin-small-right"></span> Projects</a></li>
                    <li><a href="#"><span class="uk-margin-small-right"></span>About Me</a></li>
                    <li class="uk-nav-divider"></li>
                    {/* <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li> */}

                    <li class="uk-parent">
                        <h3>Contact</h3>
                        <ul class="uk-nav-sub">
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
                    </li>
                </ul>

            </div>
        </div>
    )
};

export default OffCanvas;