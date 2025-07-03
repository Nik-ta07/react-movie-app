import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import MovieGrid from "../components/MovieGrid";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Trends: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        setError("Failed to fetch trending movies.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>
        Trending Movies
      </Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && <MovieGrid items={movies} type="movie" />}
    </Box>
  );
};

export default Trends;
