import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TestApplication from './TestApplication';
import pfp from './media/pfp.png';
import viewIcon from './media/return-eye.png';

export default function Dashboard() {
    const [profileDropdown, setProfileDropdown] = useState(false);
    const [studentDropdowns, setStudentDropdowns] = useState([]);
    const [showTestApplication, setShowTestApplication] = useState(false);
    const [students, setStudents] = useState([{ id: 0 }, { id: 1 }]);

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

    const applicationRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (applicationRef.current && !applicationRef.current.contains(e.target)) {
                setShowTestApplication(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []);

    const handleApplyForTestClick = () => {
        setShowTestApplication(true);
    };

    const addStudent = () => {
        setStudents([...students, { id: students.length }]);
    };

    return (
        <div>
            {showTestApplication && (
                <div className="application-comp" ref={applicationRef}>
                    <TestApplication showTestApplication={showTestApplication} setShowTestApplication={setShowTestApplication} />
                </div>
            )}
            <div className="navbar-container">
                <div className="logo-container">
                    <img src={pfp} alt="Logo Placeholder" />
                    <h3>Logo Placeholder</h3>
                </div>
                <div className="profile-container">
                    <img
                        src={pfp}
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
                    <button onClick={handleApplyForTestClick}>Apply For a Test</button>
                </div>
                <div className="student-list">
                    {students.map((student, index) => (
                        <div key={student.id} className="student-container">
                            <div className="student-header">
                                <h2>Student {student.id + 1}</h2>
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
                                    <img src={viewIcon} alt="View" />
                                </div>
                                <div className="student-grid-row">
                                    <h3>2.</h3>
                                    <h3 className="subject-align">Subject 1</h3>
                                    <h3>27/05/24</h3>
                                    <h3>12/30</h3>
                                    <img src={viewIcon} alt="View" />
                                </div>
                                <div className="student-grid-row last-row">
                                    <h3>3.</h3>
                                    <h3 className="subject-align">Subject 1</h3>
                                    <h3>27/05/24</h3>
                                    <h3>12/30</h3>
                                    <img src={viewIcon} alt="View" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className='add-student' onClick={addStudent}>Add Student</button>
                </div>
            </div>
        </div>
    );
}
