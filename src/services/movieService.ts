import {apiService} from "./apiService";
import {IRes} from "../types";
import {IMovie, IMovies} from "../interfaces";
import {urls} from "../constants";

const movieService ={
    getAll: (page='1'):IRes<IMovies> => apiService.get(urls.movies.base, {params:{page}}),
    getById: (id:number):IRes<IMovie> => apiService.get(urls.movies.getById(id)),
    getBeGenre: (id_genre:number, page='1'):IRes<IMovies> => apiService.get(urls.movies.getMovByGenre(id_genre), {params:{page}})

}

export {
    movieService
}