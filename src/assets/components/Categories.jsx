import Categorie from "./Categorie";

const Categories = ({ categories }) => {
  return (
    <ul className="categories">
      {categories.map((item) => {
        return (
          <li>
            <Categorie categorie={item}></Categorie>
          </li>
        );
      })}
    </ul>
  );
};
export default Categories;
