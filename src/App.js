import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { useEffect } from 'react';

const cardItems = [
  { "src": "/img/Book.png",matched:false },
  { "src": "/img/king-Crown.png",matched:false },
  { "src": "/img/Shield.png",matched:false },
  { "src": "/img/Sword.png",matched:false },
  { "src": "/img/Treasure-Box.png",matched:false },
  { "src": "/img/Treasure-Map.png",matched:false }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disable,setDisable] = useState(false)

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
    setDisable(false)
  }

  // compare 2 choice
  useEffect(()=>{
    if(choiceOne&&choiceTwo){
      setDisable(true)
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map((card) => {
            if(card.src === choiceOne.src){
              return {...card,matched:true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      }else{
        console.log('not match')
        setTimeout(()=>resetTurn(),1000)
      }
    }
  },[choiceOne,choiceTwo])

  console.log(cards)

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
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled = {disable}
          />
        )}
      </div>
      <div>{turns}</div>
    </div>
  );
}

export default App;
