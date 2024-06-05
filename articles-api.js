import axios from "axios";

const baseURL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjI2MTgwYjRiNDBlN2JlYjUwOWEyM2RjYjgyNjQyOSIsInN1YiI6IjY2NWY1YTJmMjY1MWUyNmE2NDA5MDMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XAEjrNFGiMTGl-AMjGVub1ObI7GCLn60c8HA8VYASyI",
  },
};

axios
  .get(baseURL, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// axios.defaults.baseURL = "https://api.unsplash.com";

// export const fetchImages = async (query, page) => {
//   console.log(query);
//   const response = await axios.get("/search/photos", {
//     params: {
//       client_id: "czbUvZULGNNC7UsIcW08Kp2aJWei_H3EibNIqCy4xjg",
//       query,
//       page,
//       hitsPerPage: 12,
//       orientation: "landscape",
//     },
//   });
//   return response.data.results;
// };
