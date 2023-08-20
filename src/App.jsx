import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar'
import Start from '../components/Start'
import Quiz from '../components/Quiz'
import FinalScore from '../components/FinalScore'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    
    // If User is on Start render Start, if User is on Quiz render Quiz.

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/finalscore" element={<FinalScore />} />
                </Routes>
            </div>
        </Router>
    )
}

