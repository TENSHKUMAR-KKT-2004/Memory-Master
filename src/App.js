import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { useEffect } from 'react';

const cardItems = [
  { "src": "/img/Book.png" },
  { "src": "/img/king-Crown.png" },
  { "src": "/img/Shield.png" },
  { "src": "/img/Sword.png" },
  { "src": "/img/Treasure-Box.png" },
  { "src": "/img/Treasure-Map.png" }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardItems, ...cardItems]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)
    setTurns(0)
  }

  // handle choice
  const handleChoice = (card)=>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // reset choice and increase turns
  const resetTurn = ()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurn => prevTurn+1)
  }

  // compare 2 choice
  useEffect(()=>{
    if(choiceOne&&choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        console.log('equal cards')
        resetTurn()
      }else{
        console.log('not match')
        resetTurn()
      }
    }
  },[choiceOne,choiceTwo])

  return (
    <div className="App">
      <h1>Memory Master</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => 
          <Card 
          key={card.id} 
          card={card}
          handleChoice = {handleChoice}
          />
        )}
      </div>
      <div>{turns}</div>
    </div>
  );
}

export default App;
