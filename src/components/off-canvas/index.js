import React from "react";
import "./style.scss";

function OffCanvas() {
    return (
        <div id="offcanvas-push" data-uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar uk-flex uk-flex-column">

                <button class="uk-offcanvas-close" type="button" data-uk-close></button>

                <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                    <li><h1>Samuel Yu</h1></li>

                    <li><a href="#project"><span class="uk-margin-small-right"></span> Projects</a></li>
                    <li><a href="#about"><span class="uk-margin-small-right"></span>About</a></li>
                    <li class="uk-nav-divider"></li>
                    {/* <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li> */}

       ss            <li class="uk-parent">
                        <h3>Contact</h3>
                        <ul class="uk-nav-sub">
                        <li>
                        <a href="https://github.com/yusungsamuel" data-uk-icon="icon:github"></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/samuel-yu-1431b8103/" data-uk-icon="icon:linkedin"></a>
                    </li>
                    <li>
                        <a href="/assets/resume/resume.pdf" target="_blank" data-uk-icon="icon: folder"></a>
                    </li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    )
};

export default OffCanvas;