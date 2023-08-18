import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Design a start screen component with a "Start Quiz" button.
// When the button is clicked, navigate to the question screen.


export default function Start() {
    return (
        <>
        <div className="start d-flex flex-column align-items-center justify-content-center">
            <h1 className="m-3">Trivia App</h1>
            <p className="text-center start--description">This application pulls questions from the <a className="link" target="_blank" href="https://opentdb.com/api_config.php">OTDB API</a> and displays 5 random questions on screen for you to answer. After answering, your score will be tallied and displayed to you on screen.</p>
        </div>
        <div className="container d-flex justify-content-center">
            <Link to="/start">
                <button type="button" className="btn btn-light">Start Quiz</button>
            </Link>
        </div>
        </>
    )
}