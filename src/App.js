import { useState } from 'react';
import './App.css';
import Card from './components/Card';

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

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardItems, ...cardItems]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)
    setTurns(0)
  }

  return (
    <div className="App">
      <h1>Memory Master</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => 
          <Card key={card.id} card={card}/>
        )}
      </div>
      <div>{turns}</div>
    </div>
  );
}

export default App;
