import axios from 'axios';
import { Movie } from '../types/movie';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const api = axios.create({git add .
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const fetchTrending = async (): Promise<Movie[]> => {
  const url = '/trending/all/week';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url);
  return data.results;
};

export const fetchNetflixOriginals = async (): Promise<Movie[]> => {
  const url = '/discover/tv';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url, {
    params: {
      with_networks: 213,
    },
  });
  return data.results;
};

export const fetchTopRated = async (): Promise<Movie[]> => {
  const url = '/movie/top_rated';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url);
  return data.results;
};

export const fetchActionMovies = async (): Promise<Movie[]> => {
  const url = '/discover/movie';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url, {
    params: {
      with_genres: 28,
    },
  });
  return data.results;
};

export const fetchComedyMovies = async (): Promise<Movie[]> => {
  const url = '/discover/movie';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url, {
    params: {
      with_genres: 35,
    },
  });
  return data.results;
};

export const fetchHorrorMovies = async (): Promise<Movie[]> => {
  const url = '/discover/movie';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url, {
    params: {
      with_genres: 27,
    },
  });
  return data.results;
};

export const fetchRomanceMovies = async (): Promise<Movie[]> => {
  const url = '/discover/movie';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url, {
    params: {
      with_genres: 10749,
    },
  });
  return data.results;
};

export const fetchDocumentaries = async (): Promise<Movie[]> => {
  const url = '/discover/movie';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url, {
    params: {
      with_genres: 99,
    },
  });
  return data.results;
};

export const fetchNowPlayingMovies = async (): Promise<Movie[]> => {
  const url = '/movie/now_playing';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url);
  return data.results;
};

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const url = '/movie/popular';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url);
  return data.results;
};

export const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  const url = '/movie/upcoming';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url);
  return data.results;
};

export const fetchMovieDetails = async (movieId: number) => {
  const url = `/movie/${movieId}`;
  console.log('Fetching URL:', api.defaults.baseURL + url);
  try {
    const response = await api.get(url, {
      params: {
        append_to_response: 'videos,credits',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getImageUrl = (path: string, size: 'w500' | 'original' = 'w500') => {
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const url = '/search/multi';
  console.log('Fetching URL:', api.defaults.baseURL + url);
  const { data } = await api.get(url, {
    params: {
      query,
    },
  });
  return data.results;
}; 