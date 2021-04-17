import React from 'react'
import imagine1 from "../images/shoe.png"
import Button from "@material-ui/core/Button"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { IconButton } from '@material-ui/core';
import {Link} from "react-router-dom";

function imaginePage() {
    return (
        <body>
            <div className="imaginePage">
                <div className="imaginePageTop">
                    <Link to="/">
                        <IconButton>
                            <KeyboardBackspaceIcon/>
                        </IconButton>
                    </Link>
                    <h1 style={{fontSize: "4vw"}}>If a Shoe Wanted to be a Car</h1>
                </div>
                <div className="imaginePageContent">
                    <img src={imagine1} alt="imagine image" style={{paddingLeft:"8vw"}}></img>
                    <div class="imaginePageText">
                        <p>If your shoe wanted to be a car-</p>
                        <p>then late at night that shoe might wait</p>
                        <p>till everyone was asleep</p>
                        <p> Then your shoe might find two pennies-one-two-and say,</p>
                        <p>"These two pennies will be my front tire wheels</p>
                        <p>Four pennies-four tire wheels-one-two-three-four</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default imaginePage
