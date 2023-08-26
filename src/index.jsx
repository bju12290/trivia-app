import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import Navbar from '../components/Navbar/Navbar'
import Start from '../components/Start'
import Quiz from '../components/Quiz'
import FinalScore from '../components/FinalScore'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/trivia-app" element={<Start />} />
                <Route path="/trivia-app/quiz" element={<Quiz />} />
                <Route path="/trivia-app/finalscore" element={<FinalScore />} />
            </Routes>
        </div>
    )
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)