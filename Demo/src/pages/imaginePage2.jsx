import React from 'react'
import imagine1 from "../images/windows.png"
import Button from "@material-ui/core/Button"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

function imaginePage2() {
    return (
        <body>
            <div className="imaginePage">
                <div className="imaginePageTop">
                    <Link to="/">
                        <IconButton>
                            <KeyboardBackspaceIcon/>
                        </IconButton>
                    </Link>
                    <h1 style={{fontSize: "4vw"}}>Upside Down Windows</h1>
                </div>
                <div className="imaginePageContent">
                    <img src={imagine1} alt="imagine image" style={{paddingLeft:"8vw"}}></img>
                    <div class="imaginePageText">
                        <p>If you ever climb through a window</p>
                        <p>check first to make sure the windows's not upside down,</p>
                        <p>or you might crawl through into a strange</p>
                        <p>different world where things are upside down and backwards.</p>
                        <p> If you walked with your feet in the air and you head</p>
                        <p>on the ground, your hair would get awfully dirty.</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default imaginePage2;