import React from 'react'
import '../src/styles.css'

export default function Question() {

    const [triviaData, setTriviaData] = React.useState(null)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setTriviaData(data.results))
    }, [])

    return (
        <>
            <div className="question">
            {triviaData === null ? (<p>Loading question...</p>) : (<h4>{triviaData[0].question}</h4>)}
            
            </div>
            <div className="answers form-check">
                <input className="form-check-input" type="checkbox" id="answer-1"></input>
                        <label className="form-check-label" htmlFor="answer-1"> I have a bikeasdasfasfasfasfa</label><br/>
                <input className="form-check-input" type="checkbox" id="answer-2"></input>
                        <label className="form-check-label" htmlFor="answer-2"> I have a bikeasfasfasfasasfasfasff</label><br/>
                <input className="form-check-input" type="checkbox" id="answer-3"></input>
                        <label className="form-check-label" htmlFor="answer-3"> I have a bike</label><br/>
                <input className="form-check-input" type="checkbox" id="answer-4"></input>
                        <label className="form-check-label" htmlFor="answer-4"> I have a bike</label><br/>
            </div>
        </>
    )
}