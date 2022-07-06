import React from 'react'
import { Link } from 'react-router-dom'
export default function NoteLogin() {
    return (
        <div className='container p-5'>
            <div className='container p-5'>
                <h2 className='text-center'>Login to Inotes</h2>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" />
                </div>
                <div className="text-center">
                    <Link to="/inotes/home">
                        <button type="button" class="btn-lg btn-primary">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
