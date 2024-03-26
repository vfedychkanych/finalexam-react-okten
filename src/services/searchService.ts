import {IRes} from "../types";
import {IMovies} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";


const searchService ={
    getRes: (query:string, page='1'):IRes<IMovies> => apiService.get(urls.search(query), {params:{page}})
}

export {
    searchService
}