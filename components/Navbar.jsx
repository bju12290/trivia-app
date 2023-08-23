import React from 'react'
import logo from '../src/assets/images/icon.png'
import ModeToggle from './ModeToggle'
import '../src/styles.css'
import { Link } from 'react-router-dom'
import { resetTotalCorrect } from './SubmitButton'

export default function Navbar() {

    function resetScore() {
        resetTotalCorrect()
    }

    return (
        <div className="navbar navbar-expand-lg navbar-dark">
            <div onClick={resetScore} className="navbar--logo">
            <Link className="navbar-brand" to="/">
                    <img className="navbar--icon" src={logo}></img>
                Trivia App</Link>
            </div>
            <ModeToggle />
        </div>
    )
}