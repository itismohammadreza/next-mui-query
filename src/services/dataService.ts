import { httpService } from "@services/api/httpService";

const getMovies = () => {
  return httpService.get('/movies');
}

const getMovie = (id: string) => {
  return httpService.get(`/movies/${id}`);
}

const addMovie = (movie: any) => {
  return httpService.post('/movies', movie);
}

const editMovie = (movie: any) => {
  return httpService.put(`/movies/${movie.id}`, movie);
}

export const dataService = {
  getMovies,
  getMovie,
  addMovie,
  editMovie,
}
