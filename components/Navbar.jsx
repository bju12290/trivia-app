import React from 'react'
import logo from '../src/assets/images/icon.png'
import '../src/styles.css'
import { Link } from 'react-router-dom'
import { resetTotalCorrect } from './SubmitButton'

export default function Navbar() {

    function resetScore() {
        resetTotalCorrect()
    }

    return (
        <div onClick={resetScore} className="navbar navbar-expand-lg navbar-dark">
            <div className="navbar--logo">
            <Link className="navbar-brand" to="/">
                    <img className="navbar--icon" src={logo}></img>
                Trivia App</Link>
            </div>
        </div>
    )
}