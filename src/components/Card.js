import './card.css'

const Card = ({card,handleChoice,flipped,disabled}) => {
    
    const handleClick = () => {
        if(!disabled){
            handleChoice(card)
        }
    }
    
    return ( 
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className='front' src={card.src} alt="card front" />
              <img onClick={handleClick} src="./img/Card-Cover-Vector.jpg" alt="card back" className="back" />
            </div>
          </div>
     );
}
 
export default Card;