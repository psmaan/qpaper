import React from 'react'

export default function Login({ toggleView }) {
    return (
        <div>
            <div className="user-login-landing">
                <div className="login-main">
                    <h1>Parent Sign In</h1>
                    <h3>This is a sample subheading for login.</h3>
                    <div className="login-form">
                        <input id="useridlogin" type="text" placeholder="User ID" />
                        <input id="passwordlogin" type="text" placeholder="Password" />
                        <button>Sign In</button>
                    </div>
                </div>
                <h3>Don't have a registered account? <a onClick={toggleView}>Sign Up</a></h3>
            </div>
        </div>
    )
}
