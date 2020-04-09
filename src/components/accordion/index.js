import React from "react"
import "./style.scss"

function Accordion() {
    return (
        <div className="accordion">
            <div className="item">
                <div className="gold">
                    <header>Frontend Application</header>
                    <div className="button-wrap">
                        <div class="sketchy"><p>Sales Catalog</p><a href="#project">Learn More</a></div>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
            </div>
            <div className="item">
                <div className="silver">
                    <header>Full Stack Application</header>
                    <div className="button-wrap">
                    <div class="sketchy"><p>APParent</p><a href="#project">Learn More</a></div>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <div className="item">
                <div className="gray">
                    <header>Command Line Application</header>
                    <div className="button-wrap">
                        <div class="sketchy"><p>Hoover Bot</p><a href="#project"><p>Learn More</p></a></div>
                    </div>
                </div>
                <img src="https://p68.f3.n0.cdn.getcloudapp.com/items/JruW0Ook/Image%202020-04-05%20at%201.02.35%20PM.png?v=c7eb99f7521a9c8841d639653a3ff35b" />
            </div>
            <div className="item">
                <div className="bronze">
                    <header>Simple HTML, CSS, JS</header>
                    <div className="button-wrap">
                    <div class="sketchy"><p>Boba Guide</p><a href="#project">Learn More</a></div>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/165228/pexels-photo-165228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
        </div>
    )
}

export default Accordion;