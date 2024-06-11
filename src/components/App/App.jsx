import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
// import HomePage from "../../pages/HomePage/HomePage";
// import MoviesPage from "../../pages/MoviesPage/MoviesPage";
// import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
// import Navigation from "../../Navigation/Navigation";
// import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
// import { MovieCast } from "../MovieCast/MovieCast";
// import { MovieReviews } from "../MovieReviews/MovieReviews";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);

const Navigation = lazy(() => import("../../Navigation/Navigation"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
import Loader from "../Loader/Loader";

export default function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
