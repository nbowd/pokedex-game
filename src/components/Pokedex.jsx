import './Pokedex.css'
import React from 'react';

function Pokedex() {
    return (
        <div className='pokedex'>
            <div className="pokedex-left">
                <div className="top-buttons">
                    <div className="power-outer">
                        <div className="power-inner blue">
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
                        <div className="top-screen-buttons">
                            <div className="top-button"></div>
                            <div className="top-button"></div>
                        </div>
                        <div className="main-screen">
                            <div className="screen"></div>
                        </div>
                        <div className="bottom-screen-buttons">
                            <div className="bottom-button">
                                <div className="bottom-button-highlight"></div>
                            </div>
                            <div className="bottom-speaker">
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                            </div>
                        </div>
                    </div>

                    <div className="main-buttons">
                        <div className="start-select">
                            <div className="thin-button red"></div>
                            <div className="thin-button blue"></div>
                        </div>

                        <div className="sticks">
                            <div className="sticks-left">
                                <div className="round-stick"></div>
                                <div className="left-tiny-buttons">
                                    <div className="tiny-button"></div>
                                    <div className="tiny-button"></div>
                                </div>
                            </div>
                            <div className="sticks-center"></div>
                            <div className="sticks-right">
                                <div class="nav-direction">
                                    <div class="nav-center-circle"></div>
                                    <div class="nav-button-vertical"></div>
                                    <div class="nav-button-horizontal">
                                        <div class="border-top"></div>
                                        <div class="border-bottom"></div>
                                    </div>
                                </div>
                                <div className="bottom-right">
                                    <div className="med-button red">
                                        <div className="med-button-highlight"></div>
                                    </div>
                                    <div className="right-tiny-buttons">

                                        <div className="tiny-button"></div>
                                        <div className="tiny-button"></div>
                                        <div className="tiny-button"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pokedex-right">
                <div class="empty-container">
                    <svg height="200px" width="400px">
                        <polyline
                        points="0,0 0,71 278,71 298,118 400,118 400,0 0,0"
                        style={{fill: 'white', stroke: 'none', strokeWidth: '3'}}
                        />
                        {/* 0,75 95,75 125,28 400,28 */}
                        <polyline
                        points="0,71 278,71 298,118 400,118"
                        style={{fill: 'none', stroke: 'black', strokeWidth: '3'}}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Pokedex;