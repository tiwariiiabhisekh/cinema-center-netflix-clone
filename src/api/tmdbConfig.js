// TMDB API Configuration
const TMDB_API_KEY = "5a8dd3ff0a6335b9f35855b2f604536f";
const TMDB_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThkZDNmZjBhNjMzNWI5ZjM1ODU1YjJmNjA0NTNmNiIsIm5iZiI6MTc1MzQ0MDY5MC44NjQsInN1YiI6IjY4ODM2MWIyZDlkYTE4ZTUxNjhhNjQ0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHZ70CBlnfcYvsDgxCHWQpbTgj6z7Tl8s2Fg1DvqZD0";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

// Common headers for TMDB API requests
export const tmdbOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
};

// API endpoints
export const TMDB_ENDPOINTS = {
  SEARCH_MOVIES: (query, page = 1) =>
    `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(
      query
    )}&language=en-US&page=${page}&include_adult=false`,

  GET_MOVIES: (category = "now_playing", page = 1) =>
    `${TMDB_BASE_URL}/movie/${category}?language=en-US&page=${page}`,

  GET_MOVIE_DETAILS: (movieId) =>
    `${TMDB_BASE_URL}/movie/${movieId}?language=en-US`,

  GET_MOVIE_VIDEOS: (movieId) =>
    `${TMDB_BASE_URL}/movie/${movieId}/videos?language=en-US`,
};

// Image URL helpers
export const getImageUrl = (path, size = "w500") => {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};
