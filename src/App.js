import "./App.css";
import React, { useState, useContext, useEffect} from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./Helpers/Contexts";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

var shuffle = require('shuffle-array')

function App() {
  const [gameState, setGameState] = useState("hidden");
  const [activeDef, setActiveDef] = useState("");
  const [score, setScore] = useState(0);
  const [scrambled, setScrambled] = useState(false);

  const [termDefs, modifyTermDefs] = useState([
    {term: "interphase", def: "phase of the cell cycle where the cell grows, replicates DNA then grows again" },
    {term: "chromosome", def: "the main ring of DNA in a prokaryotic cell or one of multiple structures made of DNA in a eukaryotic cell" },
    {term: "mitosis", def: "cell division in a eukaryote that produces two new nuclei which each have the same number of chromosomes as the original cell" }
  ])

  useEffect(() => {
    const scrambled = termDefs.map(x => {
       let original = x; 
       let scrambled = shuffle(x.def.split(' '))
       original.scrambled = scrambled.join(' '); 
       return original;
    })
    modifyTermDefs(scrambled)
  }, [])

  const toggleScramble = () => {
    setScrambled(!scrambled);
  }


  // or flip througb multiple definitions and rate them, or add to another set!
  // https://stackoverflow.com/questions/55518798/how-to-add-active-class-to-clicked-item-in-reactjs
  // which is a good FITB candidate?
  // # then order by length, game could be place the 2 masked words!  ___ and ___ are part of the [a) one word, b) another word]


  return (
    <div className="App">
      <h1>Unit Four Cell Cycle, Mitosis, and DNA</h1>
      <Image src="https://via.placeholder.com/500x200" fluid />


      <Container>
        <Row>
          <Col >
            <Button className="float-right" 
                onClick = {() => toggleScramble()}>{scrambled ? 'Unscramble': 'Scramble'}
            </Button>
          </Col>
        </Row>
        {termDefs.map(t => (
        <Row className="pt-5">
        <Col>
          <Card style={{ width: 'auto', height:'8rem' }} className="mx-auto justify-content-center">
            <Card.Text  className="mx-auto p-2"><h4>{t.term}</h4></Card.Text>
            <Button onClick={() => {setGameState('menu'); setActiveDef(t.term)}} className="mx-auto" style={{  width: '5rem', height:'2rem'}} variant="primary">Drill</Button>
          </Card>          
        </Col>
        <Col>
        <Card style={{  width: 'auto', height:'8rem' }} className="mx-auto justify-content-center" >
        <Card.Text className="mx-auto p-2">{scrambled ? t.scrambled : t.def}</Card.Text>
            {scrambled ? 
              <Button className="mx-auto" style={{  width: 'auto', height:'2rem'}} variant="primary">Unscramble</Button> : null
            }
          </Card>            
        </Col>
      </Row>
        ))}
      </Container>

      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <MainMenu  />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
