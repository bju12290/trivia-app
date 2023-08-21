import React from 'react'
import '../src/styles.css'
import SubmitButton from './SubmitButton'
import Answers from './Answers'

export default function Question() {

    const [triviaData, setTriviaData] = React.useState(null)
    const [questionNum, setQuestionNum] = React.useState(0)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setTriviaData(data.results))
    }, [])

    return (
        triviaData === null ? <></> : 
        <>
            <div className="question">
            <h4>{triviaData[questionNum].question}</h4>
            
            </div>
            <div className="answers form-check">
            <Answers triviaData={triviaData} questionNum={questionNum} setQuestionNum={setQuestionNum}/>
                    <div className="text-center">
                        <SubmitButton questionNum={questionNum} setQuestionNum={setQuestionNum}/>
                    </div>
            </div>
        </>
    )
}

