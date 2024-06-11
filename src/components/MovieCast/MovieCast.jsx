import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCredits } from "../../../movies-api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { moviesId } = useParams();
  const [movieCasts, setMovieCasts] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await getMovieCredits(moviesId);
        setMovieCasts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [moviesId]);
  return (
    <ul className={css.castList}>
      {movieCasts.length > 0 &&
        movieCasts.map((cast) => (
          <li key={cast.id} className={css.cast}>
            <img
              className={css.castImage}
              src={
                (!cast.profile_path && "../../../imges/user.jpg") ||
                `https://image.tmdb.org/t/p/w200${cast.profile_path}`
              }
              alt={cast.name}
            />
            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
          </li>
        ))}
    </ul>
  );
}
