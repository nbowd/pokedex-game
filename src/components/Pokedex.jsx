import './Pokedex.css'
import React from 'react';

function Pokedex() {
    return (
        <div className='pokedex'>
            <div className="pokedex-left">
                <div className="top-buttons">
                    <div className="power-outer">
                        <div className="power-inner">
                            <div className="power-highlight"></div>
                        </div>
                    </div>

                    <div className="nav-buttons">
                        <div className="nav-button red">
                            <div className="nav-highlight"></div>
                        </div>
                        <div className="nav-button yellow">
                            <div className="nav-highlight"></div>
                        </div>
                        <div className="nav-button green">
                            <div className="nav-highlight"></div>
                        </div>
                    </div>
                </div>
                <svg height="100" width="400" className="left-svg">
                    <polyline
                    // points="0,25 70,25 125,3 400,3"
                    points="0,75 95,75 125,28 400,28"
                    style={{fill: "none", stroke: "black", strokeWidth: "3"}}
                    />
                </svg>
                <div className="interface">
                    <div className="main-screen-outer">
                    
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pokedex;