import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import Start from './components/Start'
import Quiz from './components/Quiz'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function App() {
    
    // If User is on Start render Start, if User is on Quiz render Quiz.

    return (
        <Router>
            <div>
                <Navbar />
                <Start />
            </div>
        </Router>
    )
}

