import { useState } from "react";
import MovieDescription from "./MovieDescription";

export default function MovieDisplay({ movie }) {
  const [desc, setDesc] = useState(false);

  function handleClick() {
    setDesc(!desc);
  }

  const loaded = () => (
    <div onClick={handleClick}>
      <div key={movie.imdbID}>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        {desc && <MovieDescription movie={movie} />}
      </div>
    </div>
  );

  return loaded();
}
