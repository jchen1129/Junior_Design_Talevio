import React from 'react'
import Home from "../components/Home"
import Navigation from "../components/Navigation"

function index() {
    return (
        <body>
            <div className="container">
                <Navigation />
                <Home />
            </div>
        </body>
    )
}

export default index
