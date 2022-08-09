import "./singleCard.css"

const SingleCard = ({ card }) => {
    return (
      <div className="card">
        <div>
          <img src={card.src} className="front" alt="front" />
          <img src="/img/cover.png" className="back" alt="back" />
        </div>
      </div>
    );
}
 
export default SingleCard;