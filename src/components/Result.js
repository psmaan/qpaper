import React from 'react';
import { useLocation } from 'react-router-dom';
import right from './media/righticon.png';
import wrong from './media/wrongicon.png';
import Navbar from './Navbar'

export default function Result() {
    const location = useLocation();
    const { userAnswers, questions } = location.state;

    const score = userAnswers.reduce((score, answer, index) =>
        score + (answer === questions[index].correctAnswer ? 1 : 0), 0);

    return (
        <>
            <Navbar></Navbar>
            <div className='result-landing'>
                <h1 className='result-header'>Test Results</h1>
                <div className="result-heading">
                    <h2>Student: </h2>
                    <h1>Student 1</h1>
                </div>
                <div className="result-heading">
                    <h2>Subject: </h2>
                    <h1>Subject 1</h1>
                </div>
                <div className="result-heading">
                    <h2>Score: </h2>
                    <h1>{score} / {questions.length}</h1>
                </div>
                <div className="result-form">
                    {questions.map((question, index) => (
                        <div className="result-question" key={index}>
                            <h3>{index + 1}. {question.question}</h3>
                            {question.answers.map((answer, i) => (
                                <div key={i} className="answer-container">
                                    <label htmlFor={`${index}_${i}`}>{answer}</label>
                                    {answer === question.correctAnswer ? (
                                        <img src={right} alt="Correct" className="icon" />
                                    ) : userAnswers[index] === answer ? (
                                        <img src={wrong} alt="Wrong" className="icon" />
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}
