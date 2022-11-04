import React, { useEffect } from "react";
import styles from "../styles/addNewFilm.module.css";
import "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "./Header";
import Footer from "./Footer";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { getMovies, addMovies } from "./moviesService";
import { useNavigate } from "react-router-dom";


export default function AddNewFilm() {
  const [checked, setChecked] = React.useState(false);
  const [newFilm, setNewFilm] = React.useState({}); // ????

  const [items, setItems] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const movies = await getMovies();
      setItems(movies);
    }
    fetchData();
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const navigate = useNavigate();
  function handleClickRedirect() {
    navigate("/");
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: "Title",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
      description: "This text of description...",
      director: "Director",
      duration: "120",
      price: "100",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    data["id"] = items.length + 1;
    addMovies(data);
    reset();
    navigate("/");
  };
  const handleChangeInput = (e) => {
    e.preventDefault();
    setItems({ ...items, title: e.target.value });
  };

  return (
    <div className="app">
      <Header />
      <main className={styles.main}>
        <div className={styles.new_item_box}>
          <div className={styles.img__box}>
            <img className={styles.item__img} alt="img" />
            <button className={styles.item__btn}>Upload image</button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.item__form}>
            <div className={styles.details__column}>
              <div>
                <label>Film title</label>
                <input
                  {...register("title", { required: true })}
                  className={styles.item__input}
                  type="text"
                  onChange={(e) => handleChangeInput(e)}
                />
                <div className={styles.error__field}>
                  {errors?.title && <p>This field is required</p>}
                </div>
              </div>
              <div>
                <label>Image</label>
                <input
                  {...register("img", { required: true })}
                  //ref={getNewImg}
                  className={styles.item__input}
                  type="text"
                />
                <div className={styles.error__field}>
                  {errors?.title && <p>This field is required</p>}
                </div>
              </div>
              <label>Description</label>
              <textarea
                className={styles.description__field}
                {...register("description", { required: true })}
                type="text"
                placeholder="Enter a description of the movie"
              />
            </div>
            <div className={styles.details__row}>
              <div>
                <label>Director</label>
                <input
                  {...register("director", { required: true })}
                  className={styles.item__input}
                  type="text"
                />
                <div className={styles.error__field}>
                  {errors?.title && <p>This field is required</p>}
                </div>
              </div>
              <div>
                <label>Duration, min</label>
                <input
                  {...register("duration", { required: true })}
                  className={styles.item__input}
                  type="number"
                />
                <div className={styles.error__field}>
                  {errors?.title && <p>This field is required</p>}
                </div>
              </div>
              <div>
                <label>Price, $</label>
                <input
                  {...register("price", { required: true })}
                  className={styles.item__input}
                  type="number"
                />
                <div className={styles.error__field}>
                  {errors?.title && <p>This field is required</p>}
                </div>
              </div>

              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label="Featured"
              />
            </div>
            <button className={styles.item__btn} type="submit">
              Add film
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
