import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../MovieDetails/MovieDetails.css";
import { useParams } from "react-router-dom";
import axios from "../../service/api";
import requests from "../../utils/useFetch";
import {
  addFavoriteMovie,
  isMovieInFavorites,
} from "../../utils/localStorage.js";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.getMovieById(movieId));

        setMovie(request.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

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

  console.log(movie);
  return (
    <>
      <Navbar />
      <div className="header">
        <div className="container__left">
          <div
            className="cover"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
              backgroundPosition: "center center",
            }}
          ></div>
        </div>
        <div className="container__right">
          <div className="title">
            <h1>
              {movie.original_name ? movie.original_name : movie.original_title}
            </h1>
            <span>{movie.vote_average.toFixed(1)}</span>
          </div>
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
          <div className="title__details">
            <span>2018</span>|<span>2 Seasons</span>|<span>16+</span>
          </div>
          <div className="show__about">
            {truncate(`${movie.overview}`, 150)}
          </div>
          <div className="show__details">
            <span>Genre</span>
            <span>
              {movie.genres.map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index < movie.genres.length - 1 && " • "}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
