import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="navbar-container">
                <div className="logo-container">
                    <img />
                    <h3>Logo Placeholder</h3>
                </div>
                <div className="profile-container">
                    <img src="media/pfp.png" />
                    <div className="profile-dropdown">
                        <div className="account-settings">
                            <a>Account Settings</a>
                        </div>
                        <div className="logout">
                            <a href="registration.html">Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
