import React from 'react'
import logo from '../images/icon.png'
import '../styles.css'

export default function Navbar() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark">
            <div className="navbar--logo">
            <a className="navbar-brand" href="#">
                    <img className="navbar--icon" src={logo}></img>
                Trivia App</a>
            </div>
        </div>
    )
}