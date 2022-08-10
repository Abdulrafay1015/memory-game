import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/singleCard";

const card_image = [
  { src: "/img/sword-1.png" , match : false},
  { src: "/img/helmet-1.png" , match : false},
  { src: "/img/potion-1.png" , match : false},
  { src: "/img/ring-1.png" , match : false},
  { src: "/img/scroll-1.png" , match : false},
  { src: "/img/shield-1.png" , match : false} 
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle Cards
  const shuffleCards = () => {
    const shuffle = [...card_image, ...card_image]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffle);
    setChoiceOne(null)
    setChoiceTwo(null);
    setTurns(0);
  };

  //Handle Click

  const makeChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };


  //match cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              
              return  {...card , match : true}

            } 
            else {
              return card
            }
          })
        })
        resetTurns()
      }
      else {
        setTimeout(()=> 
          resetTurns(),1000  
        )
      }
    } 

  }, [choiceOne,choiceTwo])

  //START GAME Automatically
useEffect(()=> {
  shuffleCards()
},[])

  const resetTurns = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            makeChoice={makeChoice}
            flipped={card === choiceOne || card === choiceTwo || card.match}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns : {turns}</p>
    </div>
  );
}

export default App;
