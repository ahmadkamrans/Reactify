import React from 'react'
import { useState } from 'react';
export default function Textform(props) {
    // Props
    const { heading, mode } = props;
    // State
    const [textBox, setText] = useState({
        text: '',
        style: {
            color: '',
            backgroundColor: '',
            fontWeight: ''
        }
    });

    const handleChange = (e) => {
        setText({
            text: e.target.value
        })
    }

    const handleUppercase = (e) => {
        setText({
            text: textBox.text.toUpperCase()
        })
    }

    const handleLowercase = (e) => {
        setText({
            text: textBox.text.toLowerCase()
        })
    }
    const handleBold = (e) => {
        setText({
            text: textBox.text,
            style: {
                ...textBox.style,
                fontWeight: 'bold'
            }
        })
    }
    return (
        <div className={`bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`}>
            <div className="container">
                <h2 className='pt-5'>{heading}</h2>
                <textarea className="form-control" style={textBox.style} value={textBox.text} id="mybox" onChange={handleChange} rows="8"></textarea>
                <div className="d-flex justify-content-around">
                    <button onClick={handleUppercase} className="btn btn-primary my-3">Convert to Uppercase</button>
                    <button onClick={handleLowercase} className="btn btn-success my-3">Convert to Lowercase</button>
                    <button onClick={handleBold} className="btn btn-success my-3">Convert to Bold</button>
                </div>


                <div className="my-3">
                    <h2>Text Summary</h2>
                    <p className='text-end'>Words: {textBox.text.split(' ').length} Characters: {textBox.text.length} Reading Time: {0.008 * textBox.text.length} mins</p>
                </div>
                <div className="">
                    <h2 className='py-3'>Preview</h2>
                    <p className='mb-0 py-3'>{textBox.text}</p>
                </div>
            </div>
        </div>
    )
}
