import React, { useState } from 'react'
import { students, subjects } from './../studentData';
import { Link } from 'react-router-dom'

export default function TestApplication() {

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

    return (
        <div>
            <div className="test-application-container">
                <div className="test-application-header">
                    <h2>Apply for a Test</h2>
                </div>
                <div className="test-application-form">
                    <form>
                        <div>
                            <label>Select Student:</label>
                            <select value={selectedStudent} onChange={handleStudentChange}>
                                <option value="">-- Select a student --</option>
                                {students.map((student) => (
                                    <option key={student.id} value={student.id}>
                                        {student.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
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
                        <div className="pricing-form">
                            <h2>Price - Rs. 100</h2>
                        </div>
                        <div>
                            <Link to="/exampage"><button>Proceed to Payment</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
