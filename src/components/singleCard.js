import "./singleCard.css";

const SingleCard = ({ card, makeChoice , flipped , disabled }) => {
  
    const handleClick = () => {
      if (!disabled) {
          makeChoice(card);
      }
    };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} className="front" alt="front" />
        <img
          src="/img/cover.png"
          className="back"
          alt="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
