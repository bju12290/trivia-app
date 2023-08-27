import React from 'react'
import { Link } from 'react-router-dom'
import './SubmitButton.css'

export let totalCorrect = 0
let submittedAnswer = ""

export function resetTotalCorrect() {
    totalCorrect = 0;
}

export default function SubmitButton(props) {
    const questionNum = props.questionNum
    const triviaData = props.triviaData
    const submitStatus = props.submitStatus
    const setSubmitStatus = props.setSubmitStatus


    function handleSubmit() {
        const answers = document.getElementsByName('answer');
        let isAnyCheckboxSelected = false;
      
        for (let i = 0; i < answers.length; i++) {
          if (answers[i].checked) {
            isAnyCheckboxSelected = true;
            submittedAnswer = answers[i].value;
            props.setSelectedAnswer(submittedAnswer);
            break; 
          }
        }
      
        if (!isAnyCheckboxSelected) {
          const flashButton = document.querySelector('.submit--button');
      
          if (flashButton) {
            flashButton.classList.add('flash');
      
            setTimeout(() => {
              flashButton.classList.remove('flash');
            }, 500); 
          }
        } else {
          setSubmitStatus(true);
        }
    }


    function handleNextQuestion() {
        if (submittedAnswer === triviaData[questionNum].correct_answer) {
            totalCorrect = totalCorrect + 1
        } 
        if (questionNum < 4) {
            props.setQuestionNum(prevNum => prevNum + 1)
        }
        setSubmitStatus(false)
    }



    if (submitStatus === false && questionNum < 5) {
        return <button 
                onClick={handleSubmit} 
                className="submit--button btn btn-light" 
                type="button">
                Submit Answer
            </button>

    } else if (submitStatus === true && questionNum < 4) {
        return <button 
            onClick={handleNextQuestion} 
                className="submit--button btn btn-light" 
                type="button">
                Next Question
            </button>

    } else if (submitStatus === true && questionNum === 4) {
        return <Link to="/trivia-app/finalscore"><button 
                className="submit--button btn btn-light" 
                type="button"
                onClick={handleNextQuestion} >
                Get Score
            </button></Link>
            
    } else {
        <button 
                onClick={handleSubmit} 
                className="submit--button btn btn-light" 
                type="button">
                Submit Answer
            </button>
    }
}

