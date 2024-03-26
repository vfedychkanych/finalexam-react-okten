import {useAppDispatch, useAppSelector} from "../hooks";
import {useParams} from "react-router-dom";
import {MovieDetails} from "../components";
import {useEffect} from "react";
import {movieAction} from "../store";


const MovieListCard = () => {
    const {id} = useParams();

    let {movieDetails} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(movieAction.getById(+id))
    }, [id]);
    return (
        <div>
            {movieDetails&&<MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieListCard};