import React, { useEffect } from "react";
import "../Reset.css";
import "../styles/main.css";
import Header from "./Header";
import Footer from "./Footer";
import Items from "./Items";
import {
  addMovies,
  deleteAll,
  deleteMovies,
  getMovies,
  initMovies,
} from "./moviesService";
import { Link } from "react-router-dom";
import { films } from "../dataFilms";

export default function Main() {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const movies = await getMovies();
      setItems(movies);
    }
    fetchData();
  }, []);

  const deleteItem = (id) => {
    setItems([...items.filter((items) => items.id !== id)]);
    deleteMovies(id);
    //localStorage.setItem("movies", JSON.stringify(items));
  };

  const backupMovies = () => {
    //setItems(items.splice())
    //setItems(films)
    let movies = JSON.stringify(films);

    console.log(movies);
    //deleteAll();
    //initMovies(items)
    //console.log("It was backup")
  };
  return (
    <div className="app">
      <Header />
      <div className="control-nav">
        <div  onClick={backupMovies} className="add-link_btn hidden-btn">
          default movies
        </div>
        <Link to="/addnew" className="add-link_btn">
          + Add Film
        </Link>
      </div>

      <Items deleteItem={deleteItem} items={items} />
      <Footer />
    </div>
  );
}
