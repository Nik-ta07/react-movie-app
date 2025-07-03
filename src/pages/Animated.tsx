import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import MovieGrid from "../components/MovieGrid";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Animated: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16&language=en-US&page=1`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        setError("Failed to fetch animated movies.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>
        Animated Movies
      </Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && <MovieGrid items={movies} type="movie" />}
    </Box>
  );
};

export default Animated;
