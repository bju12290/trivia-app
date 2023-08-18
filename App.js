import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import Start from './components/Start'
import Quiz from './components/Quiz'

export default function App() {
    
    // If User is on Start render Start, if User is on Quiz render Quiz.

    return (
        <div>
            <Navbar />
            <Start />
        </div>
    )
}

