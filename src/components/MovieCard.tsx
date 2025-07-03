import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Rating,
  Button,
} from "@mui/material";
import {
  PlayArrow as PlayIcon,
  Add as AddIcon,
  ThumbUp as ThumbUpIcon,
} from "@mui/icons-material";
import { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.jpg";

  return (
    <Card
      sx={{
        width: { xs: 150, sm: 180, md: 200 },
        height: { xs: 250, sm: 300, md: 350 },
        m: 1,
        position: "relative",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          "& .MuiCardContent-root": {
            opacity: 1,
          },
        },
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={movie.title || movie.name}
        sx={{
          objectFit: "cover",
          height: { xs: 200, sm: 250, md: 300 },
        }}
      />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          {movie.title || movie.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {movie.overview?.substring(0, 100)}...
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">
            {movie.release_date?.split("-")[0] || "N/A"}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            Watch
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
