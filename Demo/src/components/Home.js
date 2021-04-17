import React from 'react'
import Imagines from "./Imagines"
import imagine1 from "../images/shoe.png"
import imagine2 from "../images/windows.png"
import imagine3 from "../images/blink.png"
import imagine4 from "../images/kitten.png"
import imagine5 from "../images/nobody.png"
import imagine6 from "../images/bubbles.png"
import imagine7 from "../images/dirt.png"
import imagine8 from "../images/palace.png"
import imagine9 from "../images/angel.png"
import imagine10 from "../images/swing.png"


export default function Home() {
    return (
        <div className="home">
            <h1 style={{margin: "1vw", fontSize: "2vw"}}>Read an Imagine</h1>
            <div class="row">
                <Imagines image={imagine1} title="If a Shoe Wanted to be a Car" pageLink="/imagine"/>
                <Imagines image={imagine2} title="Upside Down Windows" pageLink="/imagine2"/>
                <Imagines image={imagine3} title="The Special One-Eye Blink"/>
                <Imagines image={imagine4} title="If You Decide to be a Kitten"/>
                <Imagines image={imagine5} title="Nobody's Better than You"/>
            </div>
            <div class="row2">
                <Imagines image={imagine6} title="Do You Like Bubbles"/>
                <Imagines image={imagine7} title="If a Piece of Dirt..."/>
                <Imagines image={imagine8} title="The Imaginary Fairy Palace"/>
                <Imagines image={imagine9} title="If a Naughty Angel"/>
                <Imagines image={imagine10} title="Do You Pump Your Legs When You Swing"/>
            </div>
        </div>    
    )
}
