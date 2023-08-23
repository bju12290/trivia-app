import React from 'react'
import '../src/styles.css'
import { Link } from 'react-router-dom'

export default function Answers(props) {
    const answersArray = props.answersArray
    const submitStatus = props.submitStatus
    const selectedAnswer = props.selectedAnswer
    const triviaData = props.triviaData
    const questionNum = props.questionNum
    
    function getClass(answer) {
        if (submitStatus) {
            if (answer === triviaData[questionNum].correct_answer) {
                return 'correct-styling';
            } else if (answer === selectedAnswer) {
                return 'incorrect-styling';
            }
        }
        return '';
    }

    const submitStyle = getClass()

    const AnswersElements = () => {
        const answersElements = answersArray.map((answer, index) => {
            const labelClass = getClass(answer);
            return (<div key={index}>
                <input
                    name="answer"
                    value={answer}
                    className="form-check-input"
                    type="radio"
                    id={index}
                    disabled={submitStatus}
                    defaultChecked={selectedAnswer === answer}>
                </input>
                <label 
                    className={`answer-label form-check-label ${labelClass}`}
                    htmlFor={index}>{answer}
                </label>
                <br/>
            </div>)
        })
        return <>{answersElements}</>
    }

    return (
        <>
            <AnswersElements answersArray={answersArray}/>
        </>
    )
}