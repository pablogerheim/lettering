import './CardText.css'

function CardText({ card, setOpen }) {

  return (
    <div className="card-text" key={card.id}>
      <img src={card.img} alt={card.alt} />
      <button className="card-text__button" onClick={() => setOpen(card.id)}>Ver Detalhes</button>
      <p className={`${card.open ? 'open' : ''}`}>{card.text}</p>
    </div>
  );
}

export default CardText;
