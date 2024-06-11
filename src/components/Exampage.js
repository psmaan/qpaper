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
        display: "block",
    })

    const navigate = useNavigate();

    const questions = [
        { question: 'This is a sample question?', answers: ['HTML', 'CSS', 'JavaScript', 'React'], correctAnswer: 'React' },
        // Add more questions here...
    ];

    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

    const handleSubmit = () => {
        navigate('/result', { state: { userAnswers, questions } });
    };

    return (
        <div>
            <div className="exam-popup-container" style={popupStyle}>
                <h1>Test Heading</h1>
                <ul>
                    <li>Test subheading 1</li>
                    <li>Test subheading 2</li>
                    <li>Test subheading 3</li>
                </ul>
                <button ref={startRef}>Start</button>
            </div>
            <div className="exam-landing">
                <div className="exam-header">
                    <h1>Subject Heading</h1>
                    <h3>*30 marks</h3>
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
                <div className="exam-form2">
                    <div className="exam-question">
                        <h3>1. This is a sample question?</h3>
                        <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label for="html">HTML</label><br />
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label for="css">CSS</label><br />
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                        <label for="javascript">JavaScript</label><br />
                        <input type="radio" id="react" name="fav_language" value="react" />
                        <label for="react">React</label>
                    </div>
                    <div className="exam-question">
                        <h3>1. This is a sample question?</h3>
                        <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label for="html">HTML</label><br />
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label for="css">CSS</label><br />
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                        <label for="javascript">JavaScript</label><br />
                        <input type="radio" id="react" name="fav_language" value="react" />
                        <label for="react">React</label>
                    </div>
                    <div className="exam-question">
                        <h3>1. This is a sample question?</h3>
                        <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label for="html">HTML</label><br />
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label for="css">CSS</label><br />
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                        <label for="javascript">JavaScript</label><br />
                        <input type="radio" id="react" name="fav_language" value="react" />
                        <label for="react">React</label>
                    </div>
                    <div className="exam-question">
                        <h3>1. This is a sample question?</h3>
                        <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label for="html">HTML</label><br />
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label for="css">CSS</label><br />
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                        <label for="javascript">JavaScript</label><br />
                        <input type="radio" id="react" name="fav_language" value="react" />
                        <label for="react">React</label>
                    </div>
                    <div className="exam-question">
                        <h3>1. This is a sample question?</h3>
                        <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label for="html">HTML</label><br />
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label for="css">CSS</label><br />
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                        <label for="javascript">JavaScript</label><br />
                        <input type="radio" id="react" name="fav_language" value="react" />
                        <label for="react">React</label>
                    </div>
                    <div className="exam-submit">
                        <Link to="/result"><button>Submit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
