import './card.css'

const Card = ({card,handleChoice}) => {
    
    const handleClick = () => {
        handleChoice(card)
    }
    
    return ( 
        <div className="card">
            <div>
              <img className='front' src={card.src} alt="card front" />
              <img onClick={handleClick} src="./img/Card-Cover-Vector.jpg" alt="card back" className="back" />
            </div>
          </div>
     );
}
 
export default Card;