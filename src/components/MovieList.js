import MovieDisplay from "./MovieDisplay";

export default function MovieList({ movies }) {
  const start = () => <h1>Search For Films</h1>;
  const loaded = () => (
    <div>
      {movies.map((movie) => {
        return <MovieDisplay key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );

  return movies && movies.length ? loaded() : start();
}
