import React from 'react'
import '../src/styles.css'
import { totalCorrect, resetTotalCorrect } from './SubmitButton'
import { Link } from 'react-router-dom'
import { useWindowSize } from '@reactuses/core'
import Confetti from 'react-confetti'

export default function FinalScore() {
    const { width, height } = useWindowSize()
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
                <Confetti
                    width={width}
                    height={height}
                    />
                <h1>Perfect Score!</h1>
                <p>You got { totalCorrect } right!</p>
                <Link to="/quiz">
                <button onClick={resetScore} className="submit-button btn btn-light">Play Again</button></Link>
            </div>
        )
    } else if (totalCorrect < 3) {
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
            <Confetti
                width={width}
                height={height}
                />
            <h1>Congratulations!</h1>
            <p>You got { totalCorrect } right!</p>
            <Link to="/quiz">
            <button onClick={resetScore} className="final-score-button btn btn-light">Play Again</button></Link>
        </div>
    )
}}