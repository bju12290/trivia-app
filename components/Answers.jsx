import React from 'react'
import { nanoid } from 'nanoid'

export default function Answers(props) {
    const triviaData = props.triviaData
    const correctAnswer = triviaData[props.questionNum].correct_answer
    const incorrectAnswers = triviaData[props.questionNum].incorrect_answers
    const answersArray = [...incorrectAnswers, correctAnswer]


    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }


    shuffle(answersArray)
    console.log(answersArray)

    const AnswersElements = () => {
        const answersElements = answersArray.map((answer, index) => {
            return (<div key={index}>
                <input
                    name="answer"
                    value={answer}
                    className="form-check-input"
                    type="radio"
                    id={index}>
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