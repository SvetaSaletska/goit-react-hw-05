import { Link, useLocation } from "react-router-dom";

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => {
        <li>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.original_title}
          </Link>
        </li>;
      })}
    </ul>
  );
};
