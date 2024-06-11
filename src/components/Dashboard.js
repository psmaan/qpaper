import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TestApplication from './TestApplication';



export default function Dashboard() {
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

    let applicationRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!applicationRef.current.contains(e.target)) {
                setHiddenStyle(prevStyle => ({
                    display: prevStyle.display === "none" ? "block" : "none"
                }));
            }

        }

        document.addEventListener("mousedown", handler)
    })

    const [hiddenStyle, setHiddenStyle] = useState({
        display: "none",
    })

    const showHiddenStyle = () => {

        setHiddenStyle({
            display: "block"
        });
    }

    return (
        <div>
            <div className="application-comp" style={hiddenStyle} ref={applicationRef}>
                <TestApplication />
            </div>
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
                        <div className="logout">
                            <Link to="/">Log Out</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-container">
                <div className="landing-header">
                    <div className="dashboard-heading">
                        <h1>Parent Dashboard</h1>
                        <h3>Subheading for Parent Dashboard</h3>
                    </div>
                    <button><Link onClick={showHiddenStyle}>Apply For a Test</Link></button>
                </div>
                <div className="student-list">
                    {[0, 1].map(index => (
                        <div key={index} className="student-container">
                            <div className="student-header">
                                <h2>Student {index + 1}</h2>
                            </div>
                            <div className="student-grid">
                                <div className="student-grid-row header-row">
                                    <h3>Sr. No.</h3>
                                    <h3 className="subject-align">Subject</h3>
                                    <h3>Date</h3>
                                    <h3>Score</h3>
                                    <h3>View</h3>
                                </div>
                                <div className="student-grid-row">
                                    <h3>1.</h3>
                                    <h3 className="subject-align">Subject 1</h3>
                                    <h3>27/05/24</h3>
                                    <h3>12/30</h3>
                                    <img src="media/return-eye.png" alt="View" />
                                </div>
                                <div className="student-grid-row">
                                    <h3>2.</h3>
                                    <h3 className="subject-align">Subject 1</h3>
                                    <h3>27/05/24</h3>
                                    <h3>12/30</h3>
                                    <img src="media/return-eye.png" alt="View" />
                                </div>
                                <div className="student-grid-row last-row">
                                    <h3>3.</h3>
                                    <h3 className="subject-align">Subject 1</h3>
                                    <h3>27/05/24</h3>
                                    <h3>12/30</h3>
                                    <img src="media/return-eye.png" alt="View" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
