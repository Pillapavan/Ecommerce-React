import { BsFillBagFill } from "react-icons/bs";

const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {
  return (
    <section className="card">
      <img
        className="card-img"
        src={img}
        alt={title}
      />
      <div className="card-details">
        <h2 className="card-title">{title}</h2>
        <section className="card-reviews">
          {star}{star}{star}{star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
