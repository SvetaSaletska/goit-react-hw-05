import { Link, useLocation } from "react-router-dom";

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`movie/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
