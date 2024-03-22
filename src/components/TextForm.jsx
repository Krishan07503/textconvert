import React,{ useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("handle was clicked" + Text)
        const newText=Text.toUpperCase()
        setText(newText)
        props.showAlert("convert to Upercase","success")

    }
    const handleLoClick=()=>{
        // console.log("handle was clicked" + Text)
        const newText=Text.toLowerCase()
        setText(newText)
        props.showAlert("convert to Lowercase","success")


    }
    const handleOnChange=(event)=>{
        // console.log("handle was changed")
        setText(event.target.value)
    }
    

    const [Text, setText] = useState("enter the text");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3" >
                <textarea className="form-control mb-3" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} placeholder="Leave a comment here" id="mybox" rows="8"></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
            </div>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>your text summery</h2>
            <p>{Text.split(" ").length} word and {Text.length} charactres</p>
            <p>{0.008 * Text.split(" ").length} per minute</p>
            <h3>preview</h3>
            <p>{Text.length>0?Text:"enter something in the text box above to preview it here"}</p>
        </div>
        </>
    )
}
