import './Pokedex.css'
import React from 'react';
import { ImagePixelated } from "react-pixelate"

function Pokedex({image, name, guess, setGuess, pixels, handleCheckGuess, gameState, pixelDensity}) {
    function checkEnter(e) {
        if (e.key === 'Enter') { 
            handleEnter();
        }
    }

    function handleEnter() {
        handleCheckGuess();
        setGuess('')
    }
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
                    <div className="main-screen-outer white">
                        <div className="top-screen-buttons">
                            <div className={`top-button ${gameState === ''? 'red': 'gray'}`}></div>
                            <div className={`top-button ${pixelDensity <= 3? 'red': 'gray'}`}></div>
                            <div className={`top-button ${pixelDensity <= 2? 'red': 'gray'}`}></div>
                            <div className={`top-button ${pixelDensity <= 1? 'red': 'gray'}`}></div>
                            <div className={`top-button ${pixelDensity <= 0? 'red': 'gray'}`}></div>
                        </div>
                        <div className="main-screen">
                            <div className="screen">
                            {/* #98cb98 */}
                                <ImagePixelated src={image} width={224} height={224} centered={true} pixelSize={pixels} fillTransparencyColor={"#98cb98"}/>
                            </div>
                        </div>
                        <div className="bottom-screen-buttons">
                            <div className="bottom-button red">
                                <div className="bottom-button-highlight"></div>
                            </div>
                            <div className="bottom-speaker">
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </div>
                    </div>

                    <div className="main-buttons">
                        <div className="start-select">
                            <div className="thin-button red"></div>
                            <div className="thin-button periwinkle"></div>
                        </div>

                        <div className="sticks">
                            <div className="sticks-left">
                                <div className="round-stick gray"></div>
                                <div className="left-tiny-buttons">
                                    <div className="tiny-button"></div>
                                    <div className="tiny-button"></div>
                                </div>
                            </div>
                            <div className="rectangle-button mint-green">
                                {gameState === ''? '????': name.charAt(0).toUpperCase() + name.slice(1)}
                            </div>
                            <div className="sticks-right">
                                <div className="nav-direction">
                                    <div className="nav-center-circle"></div>
                                    <div className="nav-button-vertical"></div>
                                    <div className="nav-button-horizontal">
                                        <div className="border-top"></div>
                                        <div className="border-bottom"></div>
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
                <div className="empty-container">
                    <svg height="125px" width="400px">
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
                <div className="interface">
                    <div className="secondary-screen" >
                        <input type="text" spellCheck="false" className="guess-input" value={guess} placeholder={gameState === ''? 'Guess Name': `You ${gameState}`} onChange={(e) => setGuess(e.target.value)} onKeyUp={(e)=>checkEnter(e)} disabled={gameState !== ''} maxLength="12"/>
                        <button className="guess-enter" onClick={handleEnter}>{gameState === ''? 'Enter': 'Replay?'}</button>
                    </div>
                    <div className="gen-buttons">
                        <button className="square-button periwinkle"></button>
                        <button className="square-button periwinkle"></button>
                        <button className="square-button periwinkle"></button>
                        <button className="square-button periwinkle"></button>
                        <button className="square-button periwinkle"></button>
                        <button className="square-button periwinkle"></button>
                        <button className="square-button periwinkle"></button>
                        <button className="square-button periwinkle"></button>
                        <button className="square-button periwinkle"></button>
                        <button className="square-button periwinkle"></button>
                    </div>
                    <div className="right-thin-buttons">
                        <div className="square-thin-button gray"></div>
                        <div className="square-thin-button gray"></div>
                    </div>

                    <div className="right-middle-buttons">
                        <div className="stacked-middle">
                            <div className="stacked-circles">
                                <div className="med-button red">
                                            <div className="med-button-highlight"></div>
                                </div>                                
                                <div className="med-button red">
                                            <div className="med-button-highlight"></div>
                                </div>                                
                            </div>
                            <div className="stacked-squares">
                                <button className="white-square"></button>
                                <button className="white-square"></button>
                            </div>
                        </div>
                        <div className="large-round-button yellow">
                            <div className="large-round-button-highlight"></div>
                        </div>
                    </div>

                    <div className="right-bottom">
                        <div className="rectangle-button gray"></div>
                        <div className="rectangle-button gray"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokedex;