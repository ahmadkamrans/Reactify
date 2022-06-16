import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Alert from './helpers/Alert';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    const { title, mode, setMode, alert } = props;
    const [textColor, setTextColor] = useState('dark')
    const handleMode  = (e)=>{
        if(mode === 'dark')
        {
            setMode('light')
            setTextColor('dark')
        }else{
            setMode('dark')
            setTextColor('light')
        }
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/newsapp">News App</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input c-pointer" onClick={handleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${textColor}`} htmlFor="flexSwitchCheckDefault">{mode} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
            <Alert message={alert.message} type={alert.type} />
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Navbar'
}