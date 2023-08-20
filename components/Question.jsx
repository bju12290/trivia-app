import React from 'react'
import '../src/styles.css'
import SubmitButton from './SubmitButton'

export default function Question() {

    const [triviaData, setTriviaData] = React.useState(null)
    const [questionNum, setQuestionNum] = React.useState(0)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setTriviaData(data.results))
    }, [])

    const randomNum = Math.floor(Math.random() * 3)


    return (
        <>
            <div className="question">
            {triviaData === null ? (<></>) : (<h4>{triviaData[questionNum].question}</h4>)}
            
            </div>
            <div className="answers form-check">
                 <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="answer-1">
                </input>
                {triviaData === null ? 
                    (<></>) : 
                    (<label 
                        className="form-check-label" 
                        htmlFor="answer-1">{triviaData[questionNum].correct_answer}</label>)}
                        <br/>
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="answer-2">
                </input>
                    <label 
                    className="form-check-label" 
                    htmlFor="answer-2"> I have a bikeasfasfasfasasfasfasff</label>
                    <br/>
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="answer-3">
                </input>
                        <label 
                        className="form-check-label" 
                        htmlFor="answer-3"> I have a bike</label>
                        <br/>

                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="answer-4">
                </input>
                        <label 
                        className="form-check-label" 
                        htmlFor="answer-4"> I have a bike</label>
                        <br/>
                    <div className="text-center">
                        <SubmitButton num={questionNum} setQuestionNum={setQuestionNum}/>
                    </div>
            </div>
        </>
    )
}

