import React, {useContext} from 'react'
import {QuizContext} from '../Helpers/Contexts';
import {Questions} from '../Helpers/QuestionBank';
import '../App.css';

export default function EndScreen() {
    const {score, setScore, setGameState} = useContext(QuizContext);
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu")
    }

    const closeQuiz = () => {
        setGameState('none')
    }
    return (
        <div className='endScreen' style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <h1>Quiz Complete! Nice work</h1>
            <h3>{score} / {Questions.length} Correct!</h3>
            <button onClick={() => restartQuiz() }>Restart Quiz</button>
            <button onClick={() => closeQuiz() }>Close Quiz</button>
        </div>
    )
}
