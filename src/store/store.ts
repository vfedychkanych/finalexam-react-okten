import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer} from "./slices";

const store = configureStore({
    reducer:{
        movies: movieReducer,
        genres: genreReducer
    }
})

export {
    store
}