import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useBasketContext } from "./BasketContentProvider";
import myFormat from "../utils/EuroFormat";

const BasketItem = ({ item }) => {
  const { addRemoveItem } = useBasketContext();
  const { id, count, price, title } = item;
  return (
    <div className="basketItem">
      <span className="counter">
        <CiCircleMinus
          onClick={() => {
            addRemoveItem(id, count - 1);
          }}
        />
        {count}
        <CiCirclePlus
          onClick={() => {
            addRemoveItem(id, count + 1);
          }}
        />
      </span>
      <span className="title">{title}</span>
      <span className="price">
        {myFormat(Math.round(price * count * 100) / 100)}{" "}
      </span>
    </div>
  );
};

export default BasketItem;
