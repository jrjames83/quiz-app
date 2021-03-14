import React, {useState, useContext} from 'react';
import {Definitions} from '../Helpers/Definitions';
import {QuizContext} from '../Helpers/Contexts';
import Button from "react-bootstrap/Button";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function DefRater() {
    const {gameState, setGameState, activeTerm, setActiveTerm, likedDefs, setLikedDefs } = useContext(QuizContext);
    const [altDefIndex, setAltDefIndex] = useState(0);

    // Get the array of alternative definitions for the activeDef
    // type: array of objects
    const alternativeDefinitions = Definitions.filter(defObject => {
        return defObject.term == activeTerm;
    })[0].defs

    const advanceDefintion = (liked) => {
        if (liked) setLikedDefs([...likedDefs, alternativeDefinitions[altDefIndex].value ]); 
        if (altDefIndex < alternativeDefinitions.length - 1) {
            setAltDefIndex(altDefIndex + 1);
        } else {
            console.log('ended')
            setGameState('defEndScreen')
        }
    }


    return (
        <div className='Quiz' style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <h4 className="p-2">{activeTerm}</h4>
            <p className="p-2">
                {alternativeDefinitions[altDefIndex].value}
            </p>
            <Row>
                <Col className="p-2"><FaThumbsUp onClick={() => advanceDefintion(true)} /></Col>
                <Col className="p-2"><FaThumbsDown onClick={() => advanceDefintion(false)} /></Col>
            </Row>
        </div>
    )
}
