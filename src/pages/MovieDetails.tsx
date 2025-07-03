import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=credits`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchMovie();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!movie) return null;

  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>{movie.title}</Typography>
      <Typography variant="body1" mb={2}>{movie.overview}</Typography>
      {/* Add more movie details as needed */}
    </Box>
  );
};

export default MovieDetails;
