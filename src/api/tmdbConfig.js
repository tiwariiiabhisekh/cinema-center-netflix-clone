// TMDB API Configuration
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || "";
const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN || "";

// Validate that API credentials are available
if (!TMDB_API_KEY || !TMDB_ACCESS_TOKEN) {
  console.warn("TMDB API credentials are missing. Please check your environment variables.");
}

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
