import React, {useState} from 'react';


export default function AnswerChoice({answerText, setOpt, opt, active}) {
    const computedClassName = active ? 'active' : 'muted';

    return (
        <div className="option">
            <button className={computedClassName} 
            onClick={() => setOpt(opt)}>{answerText}</button>
        </div>
    )
}
