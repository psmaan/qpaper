import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [profileDropdown, setProfileDropdown] = useState(false);
    const [studentDropdowns, setStudentDropdowns] = useState([]);

    const toggleProfileDropdown = () => {
        setProfileDropdown(!profileDropdown);
    };

    const toggleStudentDropdown = (index) => {
        setStudentDropdowns(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div>
            <div className="navbar-container">
                <div className="logo-container">
                    <img alt="Logo" />
                    <h3>Logo Placeholder</h3>
                </div>
                <div className="profile-container">
                    <img
                        src="media/pfp.png"
                        alt="Profile"
                        onClick={toggleProfileDropdown}
                    />
                    <div
                        className="profile-dropdown"
                        style={{ transform: profileDropdown ? 'scaleY(1)' : 'scaleY(0)' }}
                    >
                        <div className="dashboard-link">
                            <Link to="/dashboard">Home</Link>
                        </div>
                        <div className="account-settings">
                            <a>Account Settings</a>
                        </div>
                        <div className="logout">
                            <Link to="/">Log Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
