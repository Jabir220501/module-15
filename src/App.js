// App.js for React Router v6
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/moviedetails" element={<MovieDetails />} />
=======
        <Route path="/movie" element={<MovieDetails />} />
>>>>>>> 33ed69e400f20c9d4736e325d24b799edc235062
      </Routes>
    </Router>
  );
};

export default App;
