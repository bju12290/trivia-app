import React from 'react'
import { nanoid } from 'nanoid'

export default function Answers(props) {
    const answersArray = props.answersArray
    const submitStatus = props.submitStatus

    const AnswersElements = () => {
        const answersElements = answersArray.map((answer, index) => {
            return (<div key={index}>
                <input
                    name="answer"
                    value={answer}
                    className="form-check-input"
                    type="radio"
                    id={index}
                    disabled={submitStatus}>
                </input>
                <label 
                    className="form-check-label"
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