import React from 'react'
import './Question.css'
import SubmitButton from '../SubmitButton/SubmitButton.jsx'
import Answers from '../Answers/Answers.jsx'
import he from 'he'

export default function Question() {
    
    const [submitStatus, setSubmitStatus] = React.useState(false)
    const [triviaData, setTriviaData] = React.useState(null)
    const [questionNum, setQuestionNum] = React.useState(0)
    const [answersArray, setAnswersArray] = React.useState([]);
    const [selectedAnswer, setSelectedAnswer] = React.useState(null)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => {
                const decodedData = data.results.map(result => ({
                    ...result,
                    question: he.decode(result.question),
                    incorrect_answers: result.incorrect_answers.map(incorrectAnswer => he.decode(incorrectAnswer)),
                    correct_answer: he.decode(result.correct_answer)
                }))
                setTriviaData(decodedData)
            })
    }, [])

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

    React.useEffect(() => {
        if (triviaData) {
            const correctAnswer = triviaData[questionNum].correct_answer
            const incorrectAnswers = triviaData[questionNum].incorrect_answers
            const newAnswersArray = [...incorrectAnswers, correctAnswer]
            shuffle(newAnswersArray)
            setAnswersArray(newAnswersArray)
            // console.log(correctAnswer) // - Uncomment to cheat ;)
        }
    }, [questionNum, triviaData]);

    return (
        triviaData === null ? <></> : 
        <>
            <div className="question">
            <div className="h5">{triviaData[questionNum].question}</div>
            
            </div>
            <div className="answers--container form-check">
            <Answers selectedAnswer={selectedAnswer} answersArray={answersArray} submitStatus={submitStatus} triviaData={triviaData} questionNum={questionNum}/>
            </div>
            <div className="submit--container">
                        <SubmitButton selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} setSubmitStatus={setSubmitStatus} submitStatus={submitStatus} triviaData={triviaData} questionNum={questionNum} setQuestionNum={setQuestionNum}/>
                    </div>
        </>
    )
}

