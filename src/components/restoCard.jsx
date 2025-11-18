import { useBasketContext } from "./BasketContentProvider";
import { IoIosStar } from "react-icons/io";
import myFormat from "../utils/EuroFormat";

const RestoCard = ({ resto }) => {
  const { addItemToBasket } = useBasketContext();
  return (
    <div
      className="restoCard"
      onClick={() => addItemToBasket(resto.id, resto.price, resto.title)}
    >
      <div className="col1">
        <header>{resto.title}</header>
        <p className="desc">{resto.description}</p>
        <footer>
          <span className="price">{myFormat(resto.price)}</span>
          {resto.popular && (
            <span className="pop">
              {" "}
              <IoIosStar /> populaire
            </span>
          )}
        </footer>
      </div>
      {resto.picture && (
        <div className="col2">
          <img src={resto.picture} />
        </div>
      )}
    </div>
  );
};

export default RestoCard;
