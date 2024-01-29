import React from "react";
import "../MovieDetails/MovieDetails.css";

function MovieDetails() {
  return (
    <div className="header">
      <div className="container__left">
        <div className="cover">
          <p>Title</p>
        </div>
      </div>
      <div className="container__right">
        <div className="title">
          <h1>STRANGER THINGS</h1>
          <span>
            9.0 <i className="ri-star-fill"></i>
          </span>
        </div>
        <div className="title__details">
          <span>2018</span>|<span>2 Seasons</span>|<span>16+</span>
        </div>
        <div className="show__about">
          When a young boy disappears, his mother, a police officer, and his
          friends must confront terrifying forces in order to get him back.
        </div>
        <div className="show__details">
          <span>Starring</span>
          <span>Millie Bobby Brown, Finn Wolfhard, Winona Ryder</span>
          <span>Created By</span>
          <span>The Duffer Brothers</span>
          <span>Genre</span>
          <span>Drama, Fantasy, Horror</span>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
