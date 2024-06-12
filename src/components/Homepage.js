import React, { useState } from 'react'
import Registration from './RegisterLogin/Registration'
import Login from './RegisterLogin/Login'
import pfp from './media/pfp.png'

export default function Homepage() {
    const [showRegistration, setShowRegistration] = useState(true)

    const toggleView = () => {
        setShowRegistration(!showRegistration)
    }

    return (
        <div>
            <div className="registration-navbar">
                <div className="navbar-logo">
                    <img src={pfp} />
                    <h3>Logo Placeholder</h3>
                </div>
                <button className="registration-button" onClick={toggleView}>
                    {showRegistration ? 'Login' : 'Register'}
                </button>
            </div>
            <div className="registration-container">
                {showRegistration ? <Registration /> : <Login />}
                <div className="welcome-landing">
                    <div className="welcome-headers">
                        <h1>Welcome to Question Paper Website</h1>
                        <h3>This is a subheading containing info for the question paper website.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
