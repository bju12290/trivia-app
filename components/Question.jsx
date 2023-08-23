import React from 'react'
import '../src/styles.css'
import SubmitButton from './SubmitButton'
import Answers from './Answers'
import he from 'he'

export default function Question() {
    
    const [submitStatus, setSubmitStatus] = React.useState(false)
    const [triviaData, setTriviaData] = React.useState(null)
    const [questionNum, setQuestionNum] = React.useState(0)
    const [answersArray, setAnswersArray] = React.useState([]);
    const [selectedAnswer, setSelectedAnswer] = React.useState(null)

    console.log(selectedAnswer)
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
                setTriviaData(decodedData);
            })
    }, [])

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
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
            console.log(correctAnswer)
        }
    }, [questionNum, triviaData]);

    return (
        triviaData === null ? <></> : 
        <>
            <div className="question">
            <h4>{triviaData[questionNum].question}</h4>
            
            </div>
            <div className="answers-container form-check">
            <Answers selectedAnswer={selectedAnswer} answersArray={answersArray} submitStatus={submitStatus} triviaData={triviaData} questionNum={questionNum}/>
            </div>
            <div className="submit--container">
                        <SubmitButton selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} setSubmitStatus={setSubmitStatus} submitStatus={submitStatus} triviaData={triviaData} questionNum={questionNum} setQuestionNum={setQuestionNum}/>
                    </div>
        </>
    )
}

