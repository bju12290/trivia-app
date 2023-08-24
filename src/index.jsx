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
                <Route path="/" element={<Start />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/finalscore" element={<FinalScore />} />
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