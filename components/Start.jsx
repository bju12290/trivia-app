import React from 'react'
import { Link } from "react-router-dom";

export default function Start() {

    return (
        <>
        <div className="start d-flex flex-column align-items-center justify-content-center">
            <h1 className="start--header">Trivia App</h1>
            <p className="text-center start--description">This application pulls data from the <a className="link" target="_blank" href="https://opentdb.com/api_config.php">OTDB API</a> and displays 5 random multiple choice questions and answers on screen for you to answer. After answering, your score will be tallied and displayed to you on screen.</p>
        </div>
        <div className="container d-flex justify-content-center">
            <Link to="/trivia-app/quiz">
                <button type="button" className="start--button btn btn-light">Start Quiz</button>
            </Link>
        </div>
        </>
    )
}