import React from 'react'
import {Link} from "react-router-dom";

function Imagines({image, title, pageLink}) {
    return (
        <div className="imagine">
            <h1 style={{fontSize: ".6vw"}}>{title}</h1>
            
            <Link to={pageLink}>
                <button>
                    <img className="imagineImage" src={image} alt="imagine image"></img>
                </button>
            </Link>
        </div>
    )
}

export default Imagines
