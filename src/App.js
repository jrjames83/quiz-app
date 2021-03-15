import "./App.css";
import React, { useState, useContext, useEffect} from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import DefRater from "./components/DefRater";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./Helpers/Contexts";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import DefEndScreen from "./components/DefEndScreen";

var shuffle = require('shuffle-array')

function App() {
  const [gameState, setGameState] = useState("hidden");
  const [activeTerm, setActiveTerm] = useState("");
  const [likedDefs, setLikedDefs] = useState([]);
  const [score, setScore] = useState(0);
  const [scrambled, setScrambled] = useState(false);

  const [termDefs, modifyTermDefs] = useState([
    {term: "interphase", def: "phase of the cell cycle where the cell grows, replicates DNA then grows again", isScrambled: false },
    {term: "chromosome", def: "the main ring of DNA in a prokaryotic cell or one of multiple structures made of DNA in a eukaryotic cell", isScrambled: false },
    {term: "mitosis", def: "cell division in a eukaryote that produces two new nuclei which each have the same number of chromosomes as the original cell", isScrambled: false }
  ])

  useEffect(() => {
    const scrambled = termDefs.map(x => {
       let original = x; 
       let scrambled = shuffle(x.def.split(' '))
       original.scrambled = scrambled.join(' '); 
       return original;
    })
    modifyTermDefs(scrambled)
  }, []) // runs on componentDidMount basically

  const toggleScramble = () => {
    let newState = [];
    let modified = termDefs.map(item => {
        let tempRow = item; 
        tempRow.isScrambled = !tempRow.isScrambled;
        newState.push(tempRow)
    })
    modifyTermDefs(newState)
    setScrambled(!scrambled);
  }

  const unScrambleDefByIndex = (index) => {
    let newState = [];
    let modified = termDefs.map((item ,i) => {
        if (i == index) {
          let tempRow = item; 
          tempRow.isScrambled = !tempRow.isScrambled;
          newState.push(tempRow)
        } else {
          newState.push(item)
        }
    })
    modifyTermDefs(newState)
  }

  const clearScramble = () => {
    let newState = [];
    let modified = termDefs.map(item => {
        let tempRow = item; 
        tempRow.isScrambled = false;
        newState.push(tempRow)
    })
    modifyTermDefs(newState)
    setScrambled(false);
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
          <Col className="col-md-2"></Col>
          <Col><h3 className="p-2">What's this about?</h3>
          <p>This is a set page prototype that describes 2 kinds of study behaviors we could consider to 
            augment the current set-page experience. I'm calling this "mid funnel" studying, which is widely applicable to almost any user segment who doesn't actively use our advanced modes. </p>
            <ul>
              <li>First, we can drill the word side by letting users rate our alternate definitions, later adding to a set</li>
              <li>Secondly, to prevent "just reading" the definition, we can enable scramble mode, allowing them to stare at 
                an assortment of words, rather than the entire definition, and unscramble if they need help. 
              </li>
            </ul>
            </Col>
            <Col className="col-md-2"></Col>
          

          
        </Row>
        <Row>
          <Col >
            <Button className="float-right" 
                // onClick = {() => toggleScramble()}>{scrambled ? 'Unscramble': 'Scramble'}
                onClick = {() => toggleScramble()}>{scrambled ? 'Unscramble': 'Scramble'}
            </Button>
            {
              scrambled ? <Button className="float-right" onClick = {() => clearScramble()}>Reset</Button> : null
            }
                        
          </Col>
        </Row>
        {termDefs.map((t, idx) => (
        <Row className="pt-5">
        <Col>
          <Card style={{ width: 'auto', height:'8rem' }} className="mx-auto justify-content-center">
            <Card.Text  className="mx-auto p-2"><h4>{t.term}</h4></Card.Text>
            <Button onClick={() => {setGameState('menu'); setActiveTerm(t.term)}} 
                    className="mx-auto" style={{  width: '5rem', height:'2rem'}} variant="primary">
                    Drill
            </Button>
          </Card>          
        </Col>
        <Col>
        <Card style={{  width: 'auto', height:'8rem' }} className="mx-auto justify-content-center" >
        <Card.Text className="mx-auto p-2">{t.isScrambled ? t.scrambled : t.def}</Card.Text>
            {t.isScrambled ? 
              <Button className="mx-auto" 
              style={{  width: 'auto', height:'2rem'}} 
              variant="primary"
              onClick = {() => unScrambleDefByIndex(idx)}
              >Unscramble</Button> : null
            }
          </Card>            
        </Col>
      </Row>
        ))}
      </Container>

      <QuizContext.Provider
        value={{ gameState, setGameState, activeTerm, setActiveTerm, likedDefs, setLikedDefs}}
      >
        {gameState === "menu" && <MainMenu  />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "defRater" && <DefRater />}
        {gameState === "endScreen" && <EndScreen />}
        {gameState === "defEndScreen" && <DefEndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
