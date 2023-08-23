import React from 'react'
import '../src/styles.css'
import { totalCorrect, resetTotalCorrect } from './SubmitButton'
import { Link } from 'react-router-dom'

export default function FinalScore() {

    function resetScore() {
        resetTotalCorrect()
    }
    if (totalCorrect < 1) {
        return (
            <div className="final-score-container d-flex flex-column align-items-center justify-content-between">
                <h1>Better Luck Next Time!</h1>
                <p>You got { totalCorrect } right!</p>
                <Link to="/quiz">
                <button onClick={resetScore} className="submit-button btn btn-light">Play Again</button></Link>
            </div>
        )
    } else if (totalCorrect === 5) {
        return (
            <div className="final-score-container d-flex flex-column align-items-center justify-content-between">
                <h1>Perfect Score!</h1>
                <p>You got { totalCorrect } right!</p>
                <Link to="/quiz">
                <button onClick={resetScore} className="submit-button btn btn-light">Play Again</button></Link>
            </div>
        )
    } else if (totalCorrect < 4) {
        return (
            <div className="final-score-container d-flex flex-column align-items-center justify-content-between">
                <h1>Not Bad!</h1>
                <p>You got { totalCorrect } right!</p>
                <Link to="/quiz">
                <button onClick={resetScore} className="submit-button btn btn-light">Play Again</button></Link>
            </div>
        )
    } else {
        return (
        <div className="final-score-container d-flex flex-column align-items-center justify-content-between">
            <h1>Congratulations!</h1>
            <p>You got { totalCorrect } right!</p>
            <Link to="/quiz">
            <button onClick={resetScore} className="final-score-button btn btn-light">Play Again</button></Link>
        </div>
    )
}}