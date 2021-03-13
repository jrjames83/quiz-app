import React, {useState, useContext} from 'react';
import {Definitions} from '../Helpers/Definitions';
import {DefsContext} from '../Helpers/Contexts';

export default function Quiz() {
    // Idea here is we flip through definitions, give them a thumb up and thumb down
    // then the user can keep their favorites for another set
    const {score, setScore, setGameState} = useContext(QuizContext);
    const [currentDefinition, setCurrentDefinition] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextDefinition = () => {
        if (Questions[currentQuestion].correctId == optionChosen) {
            setScore(score + 1);            
        }
        setCurrentDefinition(currentQuestion + 1);
    }

    const finishRating = () => {
        if (Questions[currentQuestion].correctId == optionChosen) {
            setScore(score + 1);            
        }
        setGameState('endScreen')
    }

    const handleClick = (answerId) => {
        console.log('clicked', answerId)
        setSelectedAnswer(answerId);
    }


    return (
        <div className='Quiz' style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                {Questions[currentQuestion].answers.map(ans => (
                    <button key={ans.id} 
                            className={ans.className + (ans.id === selectedAnswer ? " active_item" : "")}
                            onClick={() => {setOptionChosen(ans.id); handleClick(ans.id) }}>
                        {ans.value}
                    </button>
                ))}
            </div>
            {currentQuestion == Questions.length - 1 ? (
                <button onClick={() => finishQuiz()}>Finish Quiz</button>
            ) : (
                <button onClick = {() => {nextQuestion()}}>Next Question</button>
            )}
             
        </div>
    )
}
