import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../../../movies-api";
import css from "./MovieReviews.module.css";

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewsMovie, setReviewsMovie] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setReviewsMovie(data);
      } catch (error) {
        console.log(error);
      }
    }

    getReviews();
  }, [movieId]);
  return (
    <div>
      <ul className={css.list}>
        {reviewsMovie.length > 0 ? (
          reviewsMovie.map((rev) => (
            <li key={rev.id}>
              <h3>{rev.author}</h3>
              <p>{rev.content}</p>
            </li>
          ))
        ) : (
          <li>
            <p>We don`t have any reviews for this movie</p>
          </li>
        )}
      </ul>
    </div>
  );
};
