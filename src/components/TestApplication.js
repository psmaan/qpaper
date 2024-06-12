import React, { useState } from 'react';
import { students, subjects } from './../studentData';
import { Link } from 'react-router-dom';
import closeButton from './media/cross-editor.png'

export default function TestApplication({ showTestApplication, setShowTestApplication }) {
    const [selectedStudent, setSelectedStudent] = useState('');
    const [availableSubjects, setAvailableSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');

    const handleStudentChange = (e) => {
        const studentId = e.target.value;
        setSelectedStudent(studentId);

        const student = students.find((s) => s.id === parseInt(studentId));
        if (student) {
            setAvailableSubjects(subjects[student.class]);
            setSelectedSubject(''); // Reset the subject selection
        }
    };

    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value);
    };

    const handleClose = () => {
        setShowTestApplication(false);
    };

    const handleBackgroundClick = (e) => {
        // Only close if clicking directly on the background, not on the form
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        showTestApplication && (
            <div className="test-application-background" onClick={handleBackgroundClick}>
                <div className="test-application-container" onClick={(e) => e.stopPropagation()}>
                    <div className="test-application-header">
                        <h2>Apply for a Test</h2>
                        <button className="close-button" onClick={handleClose}><img src={closeButton}></img></button>
                    </div>
                    <div className="test-application-form">
                        <form>
                            <div className='label-select'>
                                <label>Select Student:</label>
                                <select value={selectedStudent} onChange={handleStudentChange}>
                                    <option value="">Select Student</option>
                                    {students.map((student) => (
                                        <option key={student.id} value={student.id}>
                                            {student.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='label-select'>
                                <label>Select Subject:</label>
                                <select
                                    value={selectedSubject}
                                    onChange={handleSubjectChange}
                                    disabled={!selectedStudent}
                                >
                                    <option value="">-- Select a subject --</option>
                                    {availableSubjects.map((subject, index) => (
                                        <option key={index} value={subject}>
                                            {subject}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='price-pay'>
                                <div className="pricing-form">
                                    <h2>Price - Rs. 100</h2>
                                </div>
                                <Link to="/exampage">
                                    <button type="button" className='payment-button'>Proceed to Payment</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    );
}
