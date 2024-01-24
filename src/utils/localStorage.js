export const getFavoriteMovies = () => {
  const storedFavorites = localStorage.getItem("favoriteMovies");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const addFavoriteMovie = (movie) => {
  const { backdrop_path, original_name, id } = movie;
  const favorites = getFavoriteMovies();
  const updatedFavorites = [...favorites, { backdrop_path, original_name, id }];
  localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
};

export const removeFavoriteMovie = (movieId) => {
  const favorites = getFavoriteMovies();
  const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
  localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
};

export const isMovieInFavorites = (movieId) => {
  const favorites = getFavoriteMovies();
  return favorites.some((movie) => movie.id === movieId);
};