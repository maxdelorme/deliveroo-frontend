import RestoCard from "./restoCard";

const categorie = ({ categorie }) => {
  console.log(categorie);

  return categorie.meals.length ? (
    <div className="categorie">
      <h2>{categorie.name}</h2>
      <ul className="listRestoCards">
        {categorie.meals.map((item) => {
          return (
            <li>
              <RestoCard resto={item}></RestoCard>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    ""
  );
};

export default categorie;
