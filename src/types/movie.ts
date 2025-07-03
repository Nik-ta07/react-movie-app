export interface Movie {
  id: number;
  title: string;
  name?: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids?: number[];
  genres?: { id: number; name: string }[];
  runtime?: number;
  original_language?: string;
  videos?: {
    results: {
      key: string;
      type: string;
      site: string;
    }[];
  };
  credits?: {
    cast: {
      id: number;
      name: string;
      character: string;
      profile_path: string;
    }[];
  };
} 