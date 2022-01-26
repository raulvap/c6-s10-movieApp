import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

// Clase 157: para crear multiples peticiones de forma simultanea
interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MoviesState>();

  // Clase 151: creamos un custom hook para hacer la conexión al API con Axios
  const getMovies = async () => {
    // Para crear multiples peticiones de manera simultanea, usamos promise: (clase 157)
    const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
    const upComingPromise = movieDB.get<MovieDBResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);

    // asignamos setMovies con el tipo de la interface, utilizando la posición que hicimos en el array de response
    setMovies({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upComing: response[3].data.results,
    });

    setLoading(false);
  };

  useEffect(() => {
    // now playing:
    getMovies();
  }, []);
  return {
    loading,
    ...movies,
  };
};
