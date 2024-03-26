import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";

interface IState{
    genre:IGenre,
    loadingGenre: boolean
}

const initialState: IState = {
    genre:{genres:[]},
    loadingGenre: null
}

const getAll = createAsyncThunk<IGenre, void>(
    'genreSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const GenreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenre: (state, action) =>{
            state.genre = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genre = action.payload
        })

        .addMatcher(isFulfilled(getAll), (state) => {
            state.loadingGenre = true
        })
        .addMatcher(isPending(getAll), (state) => {
            state.loadingGenre = false;
        })


})

let {reducer: genreReducer, actions} = GenreSlice;

const genreAction = {
    ...actions,
    getAll
}

export {
    genreReducer,
    genreAction
}