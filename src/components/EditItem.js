import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { editMovies, getMovies } from "./moviesService";
import { useParams, useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "../styles/editFilm.module.css";

export default function Main() {
  const { id } = useParams();
  const [checked, setChecked] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const handleChange = (event) => {
    setChecked(!event.target.checked);
  };
  useEffect(() => {
    async function fetchData() {
      const movies = await getMovies();
      setItems(movies.find((item) => parseInt(id) === item.id));
    }
    fetchData();
  }, [id]);

  const navigate = useNavigate();
  function handleClickRedirect() {
    navigate("/");
  }

   async function handleSubmit (e) {
    e.preventDefault();
    let movies = await getMovies();
    let movieToEditIndex = movies.findIndex((movie) => movie.id === Number(id));
    movies[movieToEditIndex] = {
      ...movies[movieToEditIndex],
      ...items,
      duration: Number(items.duration),
      price: Number(items.price),
    };
    console.log("This moviesToEdit", movies[movieToEditIndex]);
    editMovies(id, movies[movieToEditIndex]);
    //localStorage.setItem('movies', JSON.stringify(movies));
    handleClickRedirect();
  };

  return (
    <div className="app">
      <Header />
      <main className={styles.main}>
        <div className={styles.new_item_box}>
          <div className={styles.img__box}>
            <img src={items.img} className={styles.item__img} alt="img" />
            <button className={styles.item__btn}>Upload image</button>
          </div>
          <form onSubmit={handleSubmit} className={styles.item__form}>
            <div className={styles.details__column}>
              <div>
                <label>Film title</label>
                <input
                  className={styles.item__input}
                  type="text"
                  value={items.title}
                  onChange={(e) =>
                    setItems({ ...items, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Image</label>
                <input
                  className={styles.item__input}
                  type="text"
                  value={items.img}
                  onChange={(e) => setItems({ ...items, img: e.target.value })}
                />
              </div>
              <label>Description</label>
              <textarea
                className={styles.description__field}
                type="text"
                value={items.description}
                onChange={(e) =>
                  setItems({ ...items, description: e.target.value })
                }
                placeholder="Enter a description of the movie"
              />
            </div>
            <div className={styles.details__row}>
              <div>
                <label>Director</label>
                <input
                  className={styles.item__input}
                  type="text"
                  value={items.director}
                  onChange={(e) =>
                    setItems({ ...items, director: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Duration, min</label>
                <input
                  className={styles.item__input}
                  type="number"
                  value={items.duration}
                  onChange={(e) =>
                    setItems({ ...items, duration: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Price, $</label>
                <input
                  className={styles.item__input}
                  type="number"
                  value={items.price}
                  onChange={(e) =>
                    setItems({ ...items, price: e.target.value })
                  }
                />
              </div>

              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label="Featured"
              />
            </div>
            <button className={styles.item__btn} type="submit">
              Edit film
            </button>
            <button
              onClick={handleClickRedirect}
              className={styles.item__btn_cancel}
              type="button"
            >
              Cancel
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
