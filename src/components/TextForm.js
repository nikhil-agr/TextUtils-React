import React, { useState } from 'react';


export default function TextForm(props) {
    
    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState('Enter Text Here Now');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }


    const handleUpClick = ()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleCopy = ()=>{
        // let newText = document.getElementById("myBox");
        // newText.select();
        // navigator.clipboard.writeText(newText.value);
        // document.getSelection().removeAllRanges();

        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success");
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{backgroundColor: props.mode==='dark'?'#213555':'white', color: props.mode==='light'?'black':'white'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver To Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Conver To Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}} >
            <h1>Your Text Summary</h1>
            <p> {text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008*text.split(" ").filter((elem)=>{return elem.length!==0}).length} Minutes Read </p>
            <h2>Preview</h2>
            <p> {text.length>0 ? text : "Nothing to Preview"} </p> 
        </div>
    </>
  );
}
