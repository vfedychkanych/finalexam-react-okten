import {Genres} from "../components";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {genreAction} from "../store";
import {Puff} from "react-loader-spinner";


const GenreList = () => {
    let {genre, loadingGenre} = useAppSelector(state => state.genres);
    let dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreAction.getAll())
    }, []);
    return (
        <div>
            {loadingGenre ? <Genres genre={genre}/> :
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Puff
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                </div>}
        </div>
    );
};

export {GenreList};