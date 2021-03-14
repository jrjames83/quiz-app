import React, {useContext} from 'react'
import {QuizContext} from '../Helpers/Contexts';
import {Questions} from '../Helpers/QuestionBank';
import {Definitions} from '../Helpers/Definitions';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function DefEndScreen() {
    const {gameState, setGameState, activeTerm, setActiveTerm, likedDefs, setLikedDefs } = useContext(QuizContext);

    const alternativeDefinitions = Definitions.filter(defObject => {
        return defObject.term == activeTerm;
    })[0].defs    

    const closeQuiz = () => {
        // Reset game state and other things
        setGameState('none')
        setActiveTerm('none')
        setLikedDefs([])
    }

    return (
        <div className='DefEndScreen' style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <h3 className="p-2">Ain't learning fun?</h3>
            <p>You studied {alternativeDefinitions.length} definitions for {activeTerm}.</p>
            <h5 >Click to add ones you liked to a new set</h5>
            <ul>
            {likedDefs.map(def => 
                 <Form.Check type="checkbox" label={def} />
                )}
            </ul>    
            <Row>
                <Col><button onClick={() => closeQuiz()}>Save 'em</button></Col>
                <Col><button onClick={() => closeQuiz()}>Back to Set</button></Col>
            </Row>
            
            
        </div>
    )
}
