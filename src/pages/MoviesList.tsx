import {useAppDispatch, useAppSelector} from "../hooks";
import {useEffect} from "react";
import {movieAction} from "../store";
import {Movies} from "../components";
import {useLocation, useSearchParams} from "react-router-dom";
import {Puff} from 'react-loader-spinner';
import {NotFoundPage} from "./NotFoundPage";


const MoviesList = () => {

    let {movies,page, total_pages, loading} = useAppSelector(state => state.movies);
    let dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(movieAction.getAll(query.get('page')))

    }, [query]);


    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    return (
        <div>
            {+queryParams.get('page') < 500 ? (
                loading ? (
                    <Movies movies={movies} page={page} setQuery={setQuery} totalpage={total_pages}/>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <Puff
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                    </div>
                )
            ) : (
                <NotFoundPage/>
            )}
        </div>
    );
};

export {MoviesList};