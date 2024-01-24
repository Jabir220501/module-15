export const getFavoriteMovies = () => {
  const storedFavorites = localStorage.getItem("favoriteMovies");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const addFavoriteMovie = (movie) => {
  const favorites = getFavoriteMovies();
  const updatedFavorites = [...favorites, movie];
  localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
};

export const removeFavoriteMovie = (movieId) => {
  const favorites = getFavoriteMovies();
  const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
  localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
};
