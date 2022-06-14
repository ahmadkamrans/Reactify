import React from 'react'
import { useState } from 'react';
export default function Textform(props) {
    // Props
    const { heading } = props;
    // State
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleUppercase = (e) => {
        setText(text.toUpperCase())
    }

    const handleLowercase = (e) => {
        setText(text.toLowerCase())
    }
    return (
        <div className='container mt-5'>
            <div className="mb-3">
                <h2>{heading}</h2>
                <textarea className="form-control" value={text} id="mybox" onChange={handleChange} rows="8"></textarea>
                <div className="d-flex justify-content-around">
                    <button onClick={handleUppercase} className="btn btn-primary my-3">Convert to Uppercase</button>
                    <button onClick={handleLowercase} className="btn btn-success my-3">Convert to Lowercase</button>
                </div>

            </div>

            <div className="my-3">
                <h2>Text Summary</h2>
                <p className='text-end'>Words: {text.split(' ').length} Characters: {text.length} Reading Time: {0.008 * text.length} mins</p>
            </div>
            <div className="my-3">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
