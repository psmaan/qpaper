import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Exampage() {

    let startRef = useRef();

    useEffect(() => {

        let handler = (e) => {
            if (startRef.current.contains(e.target)) {
                setPopupStyle({
                    display: "none"
                });
            }

        }

        document.addEventListener("mousedown", handler)
    })

    const [popupStyle, setPopupStyle] = useState({
        display: "flex",
    })

    const navigate = useNavigate();

    const questions = [
        { question: 'This is a sample question?', answers: ['HTML', 'CSS', 'JavaScript', 'React'], correctAnswer: 'React' },
        { question: 'This is a sample question?', answers: ['HTML', 'CSS', 'JavaScript', 'React'], correctAnswer: 'React' },
        { question: 'This is a sample question?', answers: ['HTML', 'CSS', 'JavaScript', 'React'], correctAnswer: 'React' },
        { question: 'This is a sample question?', answers: ['HTML', 'CSS', 'JavaScript', 'React'], correctAnswer: 'React' },
        //Add questions here
    ];

    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

    const handleSubmit = () => {
        navigate('/result', { state: { userAnswers, questions } });
    };

    return (
        <div className='exam1'>
            <div className="exam-popup-background" style={popupStyle}>
                <div className="exam-popup-container">
                    <h1>Test Instructions</h1>
                    <ul className='test-instructions' type="bullet">
                        <li>This is a test subheading 1</li>
                        <li>This is a test subheading 2</li>
                        <li>This is a test subheading 3</li>
                    </ul>
                    <button className='start-test' ref={startRef}>Start</button>
                </div>
            </div>
            <div className="exam-landing">
                <div className="exam-header">
                    <h1>Subject Heading</h1>
                    <h3>30 marks</h3>
                </div>
                <h3>This is a subheading for the subject of examination.</h3>
                <div className="exam-form">
                    {questions.map((question, index) => (
                        <div className="exam-question" key={index}>
                            <h3>{index + 1}. {question.question}</h3>
                            {question.answers.map((answer, i) => (
                                <React.Fragment key={i}>
                                    <input type="radio" id={`${index}_${i}`} name={`question_${index}`} value={answer}
                                        onChange={() => setUserAnswers(prev => {
                                            const copy = [...prev];
                                            copy[index] = answer;
                                            return copy;
                                        })}
                                    />
                                    <label htmlFor={`${index}_${i}`}>{answer}</label><br />
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                    <div className="exam-submit">
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
