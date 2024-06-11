import React from 'react'
import { Link } from 'react-router-dom'

export default function Login({ toggleView }) {
    return (
        <div className='user-login-container'>
            <div className="user-login-landing">
                <div className="login-main">
                    <h1>Parent Sign In</h1>
                    <h3>This is a sample subheading for login.</h3>
                    <div className="login-form">
                        <div className="label-input">
                            <label>User ID</label>
                            <input id="useridlogin" type="text" />
                        </div>
                        <div className="label-input">
                            <label>Password</label>
                            <input id="useridlogin" type="text" />
                        </div>
                        <Link to="/dashboard"><button className='login-button'>Sign In</button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
