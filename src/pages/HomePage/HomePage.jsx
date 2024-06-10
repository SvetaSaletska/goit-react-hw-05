import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../../articles-api";
import { MovieList } from "../../components/MovieList/MovieList";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { Loader } from "../../components/Loader/Loader";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setLoading(false);
        setMovies(data);
      } catch (error) {
        setError(true);
      }
    }

    getMovies();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
