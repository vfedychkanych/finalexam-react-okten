import {useParams, useSearchParams} from "react-router-dom";
import {Movies} from "../components";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieAction} from "../store";
import {Puff} from "react-loader-spinner";


const MoviesByGenrePage = () => {
    const {id_genre} = useParams();
    const [query, setQuery] = useSearchParams({page:'1'});

    let {movies,page, total_pages, loading} = useAppSelector(state => state.movies);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieAction.getBeGenre({genre: +id_genre ,query: query.get('page')}))

    }, [id_genre, query]);


    return (
        <div>
            {loading ? <Movies movies={movies} page={page} setQuery={setQuery} totalpage={total_pages}/> :
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

export {MoviesByGenrePage};