const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const moviesId = '/movie';
const genres = '/genre/movie/list';
const search = '/search/movie';

const urls ={
    movies:{
        base: movies,
        getById: (id:number) => `${moviesId}/${id}`,
        getMovByGenre: (id_genre:number) => `${movies}?with_genres=${id_genre}`

    },
    genres:{
        base: genres,
        getById: (id:number) => `${genres}/${id}`
    },
    search: (query:string) => `${search}?query=${query}`
}

export {
    baseURL,
    urls
}