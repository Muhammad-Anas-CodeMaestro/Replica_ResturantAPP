import { useEffect, useState } from "react";
import Routes from "./Routes";
import "./App.css";
import Recipe from "./Components/Recipe";
import axios from 'axios';
import logo from './logo.jpg'

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    setData(response.data.recipes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <nav>
        <div className="left">
        <Routes />
        </div>
        <div className="right">
          <img src={logo} alt="" height={70}/>
        </div>
      </nav>
      <div className="container">
      <Recipe data={data}/>
      </div>
    </>
  );
}

export default App;
