import React, {useState, useContext} from 'react';
import {Questions} from '../Helpers/QuestionBank';
import {QuizContext} from '../Helpers/Contexts';

export default function Quiz() {
    const {score, setScore, setGameState} = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState(10);

    const nextQuestion = () => {
        if (Questions[currentQuestion].correctId == optionChosen) {
            setScore(score + 1);            
        }
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(10)
    }

    const finishQuiz = () => {
        if (Questions[currentQuestion].correctId == optionChosen) {
            setScore(score + 1);            
        }
        setSelectedAnswer(10)
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
