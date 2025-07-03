import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

interface SearchBarProps {
  open: boolean;
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    setError("");
    setResults([]);
    setSearched(false);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setResults(data.results);
      } else {
        setResults([]);
      }
      setSearched(true);
    } catch (err) {
      setError("Failed to fetch results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Search Movies
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSearch}>
          <TextField
            autoFocus
            fullWidth
            label="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </form>
        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}
        {searched && !loading && results.length === 0 && (
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            Movie not found. Please try another title.
          </Typography>
        )}
        <List>
          {results.map((movie) => (
            <ListItem key={movie.id} button>
              <ListItemText
                primary={movie.title}
                secondary={movie.release_date}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
