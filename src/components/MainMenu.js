import React, {useContext} from 'react'
import {QuizContext} from '../Helpers/Contexts';
import '../App.css';

export default function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext)
    return (
        <div className="Menu" style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <button onClick={() => {setGameState('quiz')}}>
                Start Quiz
            </button>
        </div>
    )
}
