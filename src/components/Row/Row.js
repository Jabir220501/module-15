// Row.js
import React, { useEffect, useState } from "react";
import axios from "../../service/api.js";
import { getFavoriteMovies } from "../../utils/localStorage.js";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false, isFavorite = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try {
        let moviesData;

        if (isFavorite) {
          moviesData = getFavoriteMovies();
        } else {
          const request = await axios.get(fetchUrl);
          moviesData = request.data.results;
        }

        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [fetchUrl, isFavorite]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <a href={"/movie/" + movie.id} key={movie.id}>
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              </a>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
