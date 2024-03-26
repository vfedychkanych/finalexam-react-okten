import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {IMovie, IMovies} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService, searchService} from "../../services";

interface IState{
    movies:IMovie[],
    page:string,
    total_pages:number,
    movieDetails:IMovie,
    loading: boolean,

    searchParam:string,
    formSubmitted:boolean
}

const initialState: IState = {
    movies:[],
    page:null,
    total_pages:null,
    movieDetails:null,
    loading: null,

    searchParam:null,
    formSubmitted:false
}

const getAll = createAsyncThunk<IMovies,string>(
    'movieSlice/getAll',
    async (query ,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(query);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getById = createAsyncThunk<IMovie,number>(
    'movieSlice/getById',
    async (id ,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getBeGenre = createAsyncThunk<IMovies, {query: string, genre: number}>(
    'movieSlice/getBeGenre',
    async ({query, genre} ,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getBeGenre(genre, query);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getRes = createAsyncThunk<IMovies, {search: string, query: string}>(
    'movieSlice/getRes',
    async ({search, query} ,{rejectWithValue}) => {
        try {
            const {data} = await searchService.getRes(search, query);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const MovieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        setMovies:(state, action) =>{
            state.movies = action.payload
        },
         setPage:(state, action) =>{
            state.page = action.payload
        },
         setTotalPage:(state, action) =>{
            state.total_pages = action.payload
        },
        setMovieDetails:(state, action) =>{
            state.movieDetails = action.payload
        },
        setSearchParam:(state, action) =>{
            state.searchParam = action.payload
        },
        setFormSubmitted:(state, action) =>{
            state.formSubmitted = action.payload
        },


    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
            if (action.payload) {
                state.movies = action.payload.results || [];
                state.page = action.payload.page?.toString() || "";
                state.total_pages = action.payload.total_pages || 0;
            }
        })
        .addCase(getBeGenre.fulfilled, (state, action)=>{
            if (action.payload) {
                state.movies = action.payload.results || [];
                state.page = action.payload.page?.toString() || "";
                state.total_pages = action.payload.total_pages || 0;
            }
        })
        .addCase(getRes.fulfilled, (state, action)=>{
            if (action.payload) {
                state.movies = action.payload.results || [];
                state.page = action.payload.page?.toString() || "";
                state.total_pages = action.payload.total_pages || 0;
            }
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.movieDetails = action.payload
        })

        .addMatcher(isFulfilled(getAll, getById, getBeGenre, getRes), (state) => {
            state.loading = true
        })
        .addMatcher(isPending(getAll, getById, getBeGenre, getRes), (state) => {
            state.loading = false
        })
        .addMatcher(isRejected(getAll, getById, getBeGenre, getRes), (state) => {
            state.loading = true
        })

});

let {reducer: movieReducer, actions} = MovieSlice;

const movieAction = {
    ...actions,
    getAll,
    getById,
    getBeGenre,
    getRes
}

export {
    movieReducer,
    movieAction
}