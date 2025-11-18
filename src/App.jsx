import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Basket from "./components/Basket";
import { BasketContentProvider } from "./components/BasketContentProvider";

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
      <BasketContentProvider>
        <main>
          <div className="container">
            <Categories categories={data.categories}></Categories>
            <Basket></Basket>
          </div>
        </main>
      </BasketContentProvider>
    </div>
  );
}

export default App;
