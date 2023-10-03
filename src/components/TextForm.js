import React, { useState } from 'react';


export default function TextForm(props) {

    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState('Enter Text Here Now');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        setText("");
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        console.log("The text has been copied to clipboard");
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

  return (
    <>
        <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Conver To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Conver To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {text.split(" ").length} Minutes Read </p>
            <h2>Preview</h2>
            <p> {text} </p> 
        </div>
    </>
  );
}
