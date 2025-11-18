import { useBasketContext } from "./BasketContentProvider";
import BasketItem from "./BasketItem";
import myFormat from "../utils/EuroFormat";

const Basket = () => {
  const { basketContent } = useBasketContext();

  return (
    <div className="basket">
      <div className="bottomMsg ">
        <p>Voir le panier</p>
      </div>
      <div className="panel">
        {!basketContent || !basketContent.length ? (
          <>
            <div className="validate">Valider mon panier</div>
            <div className="content">Votre panier est vide</div>
          </>
        ) : (
          <>
            <div className="validate withitems">Valider mon panier</div>
            <div className="listItems">
              {basketContent.map((item) => (
                <BasketItem key={item.id + "-" + item.count} item={item} />
              ))}
            </div>
            <hr></hr>

            <div className="subTotal">
              <span>Sous-Total</span>
              <span>
                {" "}
                {myFormat(
                  basketContent.reduce((sum, item) => {
                    sum += item.count * item.price;
                    return sum;
                  }, 0)
                )}
              </span>
            </div>
            <div className="livraison">
              <span>Frais de livraison</span>
              <span>{myFormat(2.5)}</span>
            </div>
            <hr></hr>
            <div className="total">
              <span>Total</span>
              <span>
                {myFormat(
                  basketContent.reduce((sum, item) => {
                    sum += item.count * item.price;
                    return sum;
                  }, 2.5)
                )}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
