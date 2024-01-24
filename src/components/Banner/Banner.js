import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../service/api.js";
import requests from "../../utils/useFetch";
import {
  addFavoriteMovie,
  isMovieInFavorites,
} from "../../utils/localStorage.js";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const handleAddToFavorites = () => {
    if (!isMovieInFavorites(movie.id)) {
      addFavoriteMovie(movie);
      setIsFavorite(true);
      alert("Added to My List!");
    } else {
      alert("Already in My List!");
    }
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button
            className={`banner__button ${
              isFavorite ? "banner__button_active" : ""
            }`}
            onClick={handleAddToFavorites}
          >
            {isFavorite ? "Already on My List" : "My List"}
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(`${movie.overview}`, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
