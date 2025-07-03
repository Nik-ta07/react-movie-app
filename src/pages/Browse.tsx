import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Browse: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>Now Playing</Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && <MovieGrid items={movies} type="movie" />}
    </Box>
  );
};

export default Browse;
