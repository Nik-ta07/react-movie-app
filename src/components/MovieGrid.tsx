import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

interface MovieGridProps {
  items: any[];
  type: "movie" | "tv";
  onItemClick?: (item: any) => void;
}

const getPosterUrl = (path: string | null) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

const MovieGrid: React.FC<MovieGridProps> = ({ items, type, onItemClick }) => (
  <Grid container spacing={2}>
    {items.map((item) => (
      <Grid item xs={6} sm={4} md={3} lg={2} key={item.id}>
        <Card
          sx={{ cursor: onItemClick ? "pointer" : "default", height: "100%" }}
          onClick={onItemClick ? () => onItemClick(item) : undefined}
        >
          <CardMedia
            component="img"
            height="300"
            image={getPosterUrl(item.poster_path)}
            alt={item.title || item.name}
          />
          <CardContent>
            <Typography variant="subtitle1" noWrap>
              {item.title || item.name}
            </Typography>
            {type === "tv" && item.first_air_date && (
              <Typography variant="caption" color="text.secondary">
                {item.first_air_date}
              </Typography>
            )}
            {type === "movie" && item.release_date && (
              <Typography variant="caption" color="text.secondary">
                {item.release_date}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default MovieGrid;
