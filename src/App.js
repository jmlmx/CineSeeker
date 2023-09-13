import { useState, useEffect } from "react";
import "./styles.css";
// WE IMPORT OUR COMPONENTS
import MovieList from "./components/MovieList";
import Form from "./components/Form";

export default function App() {
  //variable with your apiKey
  const apiKey = "b7bb1fa6";

  //State to hold movie data
  const [movies, setMovies] = useState(null);

  const getMovies = async (searchTerm) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
    );
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {}, []);

  return (
    <div className="App">
      <Form moviesearch={getMovies} />
      <MovieList movies={movies} />
    </div>
  );
}
