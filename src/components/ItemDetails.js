import React, { useEffect } from "react";
import "../styles/itemDetails.css";
import { Link, useParams } from "react-router-dom";
import { getMovies } from "./moviesService";
import {
  Groups2TwoTone,
  AccessTimeRounded,
  SettingsOutlined,
} from "@mui/icons-material";
import Header from "./Header";
import Footer from "./Footer";

import Items from "./Items";
import Item from "./Item";
import Main from "./Main";

export default function ItemDetails() {
  const { id } = useParams();
  const [items, setItems] = React.useState({});

  useEffect(() => {
    async function fetchData() {
      const movies = await getMovies();
      setItems(movies.find((item) => parseInt(id) === item.id));
    }
    fetchData();
  }, [id]);
  console.log(items);

  return (
    <div className="app">
      <Header />
      <div className="wrapper-item">
      <div className="item">
        <div className="row-title">
          <img className="item__img" src={items.img} alt="img" />
          <div className="item-details">
            <h2 className="item__title">{items.title}</h2>
            <p className="item__director">
              <Groups2TwoTone fontSize="medium" /> {items.director}
            </p>
            <p className="item__duration">
              <AccessTimeRounded fontSize="small" /> {items.duration} min
            </p>
            <p className="item__edit-btn">
              <Link
                className="item__edit-link"
                to={`/itemDetails/${items.id}/edit`}
              >
                <SettingsOutlined color="success" />
                <p>Edit film</p>
              </Link>
            </p>
            <p className="item__price">{items.price}$</p>
          </div>
        </div>
        <p className="item__description">{items.description}</p>
      </div>

      <Footer />
    </div>
    </div>
  );
}
