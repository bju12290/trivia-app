import React from 'react'
import Question from './Question'

// Fetch 5 questions from the OTDB API using fetch or a library like axios.
// Design a question screen component to display the questions one by one along with answer choices.
// Allow users to select answers for each question.

export default function Quiz() {

    const [triviaData, setTriviaData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setTriviaData(data))
    })

    return (
        <div className="question-container d-flex flex-column align-items-center justify-content-between">
            <Question />
            <button className="submit-button btn btn-light" type="submit">Submit Answer</button>
        </div>
    )
}

// Design a "Check Answers" button on the question screen.
// When the button is clicked, calculate the number of correct answers and display the result.