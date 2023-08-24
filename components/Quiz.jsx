import React from 'react'
import Question from './Question/Question'

export default function Quiz() {

    return (
        <div className="question--container d-flex flex-column align-items-center justify-content-between">
            <Question />
        </div>
    )
}