import React from 'react'

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
                    className="form-check-input"
                    type="checkbox"
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




    //     <>
    // <input 
    //     className="form-check-input" 
    //     type="checkbox" 
    //     id="answer-1">
    // </input>
    // {triviaData === null ? 
    //     (<></>) : 
    //     (<label 
    //         className="form-check-label" 
    //         htmlFor="answer-1">test</label>)}
    //         <br/>
    // <input 
    //     className="form-check-input" 
    //     type="checkbox" 
    //     id="answer-2">
    // </input>
    //     <label 
    //     className="form-check-label" 
    //     htmlFor="answer-2"> I have a bikeasfasfasfasasfasfasff</label>
    //     <br/>
    // <input 
    //     className="form-check-input" 
    //     type="checkbox" 
    //     id="answer-3">
    // </input>
    //         <label 
    //         className="form-check-label" 
    //         htmlFor="answer-3"> I have a bike</label>
    //         <br/>

    // <input 
    //     className="form-check-input" 
    //     type="checkbox" 
    //     id="answer-4">
    // </input>
    //         <label 
    //         className="form-check-label" 
    //         htmlFor="answer-4"> I have a bike</label>
    //         <br/>
    //         </>