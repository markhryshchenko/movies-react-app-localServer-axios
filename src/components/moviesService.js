import axios from "axios";

const apiUrl = "http://localhost:5000";

export async function getMovies() {
  const response = await axios.get(`${apiUrl}/movies`);
  return response.data;
}
export async function addMovies(newItem) {
  const response = await axios.post(`${apiUrl}/movies`, newItem, {
   
  });
  return response;
}
export async function editMovies(id, newItem) {
  const response = await axios.put(`${apiUrl}/movies/${id}`, newItem, {
   
  });
  return response;
}

export async function deleteMovies(id) {
  const response = await axios.delete(`${apiUrl}/movies/${id}`);
  return response;
}


/* 
---=== with fetch===---
export async function getMovies() {
  const data = await fetch(`${apiUrl}/movies`);
  const movies = await data.json();
  return movies;
} 
export async function addMovies(newItem) {
  await fetch(`${apiUrl}/movies`, {
    method: "POST",
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function editMovies(id, newItem) {
  await fetch(`${apiUrl}/movies/${id}`, {
    method: "PUT",
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function deleteMovies(id) {
  await fetch(`${apiUrl}/movies/${id}`, {
    method: "DELETE",
  });
}
*/
/* 
---=== with local storage===---
export function getMoviesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("movies"));
}
export async function addMoviesToLocalStorage(newItem) {
  const items = JSON.parse(localStorage.getItem("movies")) || [];
  localStorage.setItem("movies", JSON.stringify([...items, newItem]));
}
export function initMoviesFromLocalStorage() {
  const itemsFromStorage = JSON.parse(localStorage.getItem("movies"));
  if (itemsFromStorage === null) {
    localStorage.setItem("movies", JSON.stringify(films));
  }
}
 */
