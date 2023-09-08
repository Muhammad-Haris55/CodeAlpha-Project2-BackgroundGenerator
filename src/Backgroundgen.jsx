import React from 'react'
import { useState } from 'react';
let type = ""
let gradientValue = "";
function Backgroundgen() {
    const gradientCode = document.getElementById("gradientCode");
    const copyButton = document.getElementById("copyButton");
    const [color1, setColor1] = useState("#7ec247");
    const [color2, setColor2] = useState("#04cd26");
    const onchangecolor1 = (event) => {
        setColor1(event.target.value)
    }
    const onchangecolor2 = (event) => {
        setColor2(event.target.value)
    }
    let lin = () => {
        type = "Linear"
    }
    let rad = () => {
        type = "Radial"
    }
    let both = () => {
        type = "Both"
    }
    const genrateclick = () => {
        let Linear = document.getElementById("select1")
        let Radial = document.getElementById("select2")
        let Both = document.getElementById("select3")
        const selectedColor1 = color1;
        const selectedColor2 = color2;

        if (type === "Both") {
            gradientValue = `linear-gradient(to left,${selectedColor1}, ${selectedColor2}),  radial-gradient(${selectedColor1}, ${selectedColor2})`
        }
        if (type === "Linear") {
            gradientValue = `linear-gradient(${selectedColor1}, ${selectedColor2})`

        }
        if (type === "Radial") {
            gradientValue = `radial-gradient(${selectedColor1}, ${selectedColor2})`
        }
        document.body.style.background = gradientValue;
        gradientCode.textContent = gradientValue;
    }
    let copygradient=""
    const Copy=()=>{
        copygradient=gradientValue;
        alert("Gradient Copied")
    }
    
    

    return (
        <>
            <div className="head">

                <div className="main">
                    <div className="panel">
                        <div className="title">
                            <p>Color-Panel</p>
                        </div>
                        <div className="colours">
                            <div className="col1">
                                <div className="name">
                                    <label id="colorInput1"  >Choose Color 1:</label>
                                </div>
                                <div id="swatch">
                                    <input type="color" value={color1} onChange={onchangecolor1} id="color" name="color"></input>
                                    <div class="info">
                                        <h5>Input</h5>
                                        <h6>Color</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col2">
                                <div className="name">
                                    <label id="colorInput2 " >Choose Color 2:</label>
                                </div>
                                <div id="swatch">
                                    <input type="color" id="color" name="color" onChange={onchangecolor2} value={color2}></input>
                                    <div class="info">
                                        <h5>Input</h5>
                                        <h6>Color</h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="grad">
                            <div class="gradient-type">
                                <div className="title">
                                    <p>Gradient Type</p>
                                </div>
                                <div class="mydict">
                                    <div>
                                        <label  >
                                            <input type="radio" name="radio" onClick={lin} ></input>
                                            <span id="select1" > Linear</span>
                                        </label>
                                        <label >
                                            <input type="radio" name="radio" onClick={rad} ></input>
                                            <span id="select2"  >Radial</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" onClick={both} ></input>
                                            <span id="select3" >Both</span>
                                        </label>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="genbtn">
                            <button id='gen' onClick={genrateclick}>
                                Generate
                            </button>
                        </div>
                        <div className="copybtn">
                            <button id='gen' onClick={Copy}>
                                Copy Gradient
                            </button>
                        </div>
                        <div className="exportbtn">
                            <button id="cardbtn" type="button" class="btn btn-primary mt-2">Export Background</button>
                        </div>

                    </div>
                    <div className="bg"></div>
                </div>
            </div>

        </>
    )
}

export default Backgroundgen
