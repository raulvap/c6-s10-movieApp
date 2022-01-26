import axios from 'axios';

// Creamos el API con Axios: (clase 149)
const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '527ae7f5edbd5ac075ab45a9c2c572ac',
    language: 'es-ES',
  },
});

export default movieDB;
