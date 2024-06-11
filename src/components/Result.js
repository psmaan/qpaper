// Result.js
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Result() {
    const location = useLocation();
    const { userAnswers, questions } = location.state;

    const score = userAnswers.reduce((score, answer, index) => score + (answer === questions[index].correctAnswer ? 1 : 0), 0);

    return (
        <div>
            {/* ... existing code ... */}
            <div className="result-heading">
                <h1>Score: </h1>
                <h1>{score} / {questions.length}</h1>
            </div>
            <div className="exam-form">
                {questions.map((question, index) => (
                    <div className="exam-question" key={index}>
                        <h3>{index + 1}. {question.question}</h3>
                        {question.answers.map((answer, i) => (
                            <React.Fragment key={i}>
                                <label htmlFor={`${index}_${i}`}>{answer}</label><br />
                                <img src={answer === question.correctAnswer ? 'correct.png' : 'wrong.png'} alt="" />
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
