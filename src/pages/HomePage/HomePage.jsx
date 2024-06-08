import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../../articles-api";
import { MovieList } from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const data = await getTrendingMovies();
      setMovies(data);
    }

    getMovies();
  }, []);
  return (
    <div>
      <h2>Home</h2>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
