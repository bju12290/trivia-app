import React from 'react'
import '../src/styles.css'
import { totalCorrect } from './SubmitButton'

export default function FinalScore() {
    return <p>{ totalCorrect }</p>
}