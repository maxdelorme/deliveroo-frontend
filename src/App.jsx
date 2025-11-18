import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import Categories from "./assets/components/Categories";
import Basket from "./assets/components/Basket";
function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--5sgz5mzbgxzv.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Chargement en cours</p>
  ) : (
    <div className="app">
      <Header></Header>
      <Banner restaurant={data.restaurant}></Banner>
      <main>
        <div className="container">
          <Categories categories={data.categories}></Categories>
          <Basket></Basket>
        </div>
      </main>
    </div>
  );
}

export default App;
