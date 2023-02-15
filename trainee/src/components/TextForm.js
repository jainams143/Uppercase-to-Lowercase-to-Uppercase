import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleDownClick =()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>(
        setText(event.target.value)
    )

        const [text, setText] =useState("");

    return (
        <>
        <div className="container">
           <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="add" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" value={text} onClick={handleUpClick}>conver to uppercase</button>
            <button className="btn btn-primary" value={text} onClick={handleDownClick}>conver to Lowercase</button>
      </div>
      <div className="container my-5">
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} words and {text.length} letters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>

      </div>
      </>
    )
}
