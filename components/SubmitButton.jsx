import React from 'react'
import { Link } from 'react-router-dom'



export default function SubmitButton(props) {
    const questionNum = props.questionNum

    const [submitStatus, setSubmitStatus] = React.useState(false)

    function handleSubmit() {
        setSubmitStatus(true)
    }
    
    function handleNextQuestion() {
        if (questionNum < 4) {
            props.setQuestionNum(prevNum => prevNum + 1)
        } 
        
        setSubmitStatus(false)
    }

    if (submitStatus === false && questionNum < 5) {
        return <button 
                onClick={handleSubmit} 
                className="submit-button btn btn-light" 
                type="button">
                Submit Answer
            </button>
    } else if (submitStatus === true && questionNum < 4) {
        return <button 
            onClick={handleNextQuestion} 
                className="submit-button btn btn-light" 
                type="button">
                Next Question
            </button>
    } else if (submitStatus === true && questionNum === 4) {
        return <Link to="/finalscore"><button 
                className="submit-button btn btn-light" 
                type="button">
                Get Score
            </button></Link>
    } else {
        <button 
                onClick={handleSubmit} 
                className="submit-button btn btn-light" 
                type="button">
                Submit Answer
            </button>
    }
}