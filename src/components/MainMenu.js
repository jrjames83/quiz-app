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
            <h4>Swipe through the definitions</h4>
            <button onClick={() => {setGameState('defRater')}}>
                Push to start
            </button>
        </div>
    )
}
