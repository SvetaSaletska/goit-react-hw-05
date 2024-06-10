import { useEffect, useState, useRef, Suspense } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../../articles-api";
import { MovieInfo } from "../../components/MovieInfo/MovieInfo";
import { Loader } from "../../components/Loader/Loader";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import css from "../MovieDetailsPage/MovieDetailsPage.module.css";

export const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function openDetails() {
      try {
        setLoading(true);
        const data = await getMovieDetails(moviesId);
        setLoading(false);
        setMovies(data);
      } catch (error) {
        setError(true);
      }
    }

    openDetails();
  }, [moviesId]);

  return (
    <div>
      <div>
        <p>
          <Link to={backLink.current}>Go back</Link>
        </p>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {movies && <MovieInfo movie={movies} />}
        <div className={css.container}>
          <h2 className={css.title}>Additional information</h2>
          <ul>
            <li>
              <Link className={css.link} to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link className={css.link} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
