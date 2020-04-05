import React from "react"
import "./style.scss"

function Accordion() {
    return (
        <div className="accordion">
            <div className="item">
                <div className="gold">
                    <header>Sales Catalog</header>
                </div>
                <img src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
            </div>
            <div className="item">
                <div className="silver">
                    <header>APP@rent</header>
                </div>
                <img src="https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <div className="item">
                <div className="gray">
                    <header>Destroyer Simulator</header>
                </div>
                <img src="https://p68.f3.n0.cdn.getcloudapp.com/items/GGuNDoJk/Image%202020-04-04%20at%203.36.25%20PM.png?v=3638a30d759778773bc73717b54df1de" />
            </div>
            <div className="item">
                <div className="bronze">
                    <header>Boba Guide</header>
                </div>
                <img src="https://images.pexels.com/photos/165228/pexels-photo-165228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            </div>
        </div>
    )
}

export default Accordion;