import React, { useState } from 'react'

export default function Form(props) {

    //initialize state
    const [text, setText] = useState('');

    // OnTextChangeListener
    const handleOnChange = (event) => {
        // to change the state of the state variable
        setText(event.target.value)
    }

    // OnClickListener
    const handleClickUp = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to upper case','success')
    }

    const handleClickLow = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to lower case','success')
    }
    const handleClear = ()=>{
        setText('')
        props.showAlert('Text cleared','success')
    }
    const handleCopy = ()=>{
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert('Text copied to clipboard','success')
    }
    const handleSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Removed spaces','success')
    }
    return (
        <>
            <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'gray':'white',color:props.mode ==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleClickUp}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClickLow}>Convert to LowerCase</button>                             
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button> 
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button> 
                <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove redundant spaces</button> 
            </div>
            <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.length>1?text.split(' ').length:0} words {text.length} character</p>                
                <p>{0.008*(text.length===0?0:text.split(' ').length)} minutes taken to read {text.length>1?text.split(' ').length:0} word</p>                
                <h2>preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
