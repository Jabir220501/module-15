import React from 'react';

function MovieDetails() {
  return (
    <div className=''>
      <nav>
        <div className="nav__left">
          <div className="nav__logo">
            <a href="#"><img src="" alt="logo" /></a>
          </div>
          <span><a href="#">Browse</a></span>
        </div>
        <div className="nav__right">
          <a href="#"><i className="ri-notification-3-fill"></i></a>
          <img src="" alt="User" className="nav__user" />
        </div>
      </nav>
      <header>
        <div className="container__left">
          <div className="cover">
            <p>Resume</p>
            <p>S2E2: "Trick ot Treat, Freak"</p>
            <div className="progress__bar"></div>
            <div className="cover__details">
              After Will sees something terrible on trick-or-treat night, Mike
              wonders whether Eleven is still out there. Nancy wrestles with the
              truth about Barb.
            </div>
          </div>
        </div>
        <div className="container__right">
          <div className="subtitle"><span>NETFLIX</span> ORIGINAL</div>
          <div className="title">
            <h1>STRANGER THINGS</h1>
            <span>9.0 <i className="ri-star-fill"></i></span>
          </div>
          <div className="title__details">
            <span>2018</span>|<span>2 Seasons</span>|<span>16+</span>
          </div>
          <div className="show__nav">
            <span>OVERVIEW</span>
            <span>EPISODES</span>
            <span>TRAILERS & MORE</span>
            <span>MORE LIKE THIS</span>
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
          <div className="next__episodes">
            <div className="episode__card">
              <p>S2E2</p>
              <p>Trick or Treat, Freak</p>
            </div>
            <div className="episode__card">
              <p>S2E3</p>
              <p>The Pollywog</p>
            </div>
            <div className="episode__card">
              <p>S2E4</p>
              <p>Will The Wise</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MovieDetails;
