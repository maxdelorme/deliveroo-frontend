import Categorie from "./Categorie";

const Categories = ({ categories }) => {
  return (
    <ul className="categories">
      {categories.map((item, index) => {
        return (
          <li key={item + "_" + index}>
            <Categorie categorie={item}></Categorie>
          </li>
        );
      })}
    </ul>
  );
};
export default Categories;
