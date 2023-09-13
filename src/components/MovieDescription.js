import { useState, useEffect } from "react";

export default function MovieDescription({ movie }) {
  const apiKey = "b7bb1fa6";
  const [film, setFilm] = useState(movie);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
      );
      const data = await response.json();
      setFilm(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <p>
        <strong>Released:</strong> {film.Year}
      </p>
      <p>
        <strong>Director:</strong> {film.Director}
      </p>
      <p>
        <strong>Starring:</strong> {film.Actors}
      </p>
      <p>
        <strong>Plot:</strong> {film.Plot}
      </p>
      <p>
        <strong>Rating:</strong> {film.imdbRating}
      </p>
    </div>
  );
}
