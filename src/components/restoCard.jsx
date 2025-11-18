import { IoIosStar } from "react-icons/io";
const RestoCard = ({ resto }) => {
  return (
    <div className="restoCard">
      <div className="col1">
        <header>{resto.title}</header>
        <p className="desc">{resto.description}</p>
        <footer>
          <span className="price">{resto.price} €</span>
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
