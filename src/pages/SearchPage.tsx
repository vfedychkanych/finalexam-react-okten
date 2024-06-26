import {useLocation, useSearchParams} from "react-router-dom";
import {Movies, SearchForm} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {useEffect} from "react";
import {movieAction} from "../store";
import {Puff} from "react-loader-spinner";
import { NotFoundPage } from "./NotFoundPage";


const SearchPage = () => {

    const [query, setQuery] = useSearchParams({page:'1'});

    let {movies,page, total_pages, loading, searchParam} = useAppSelector(state => state.movies);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieAction.getRes({search: searchParam, query: query.get('page')}))
    }, [query, searchParam]);


    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    return (
        <div>
            {+queryParams.get('page') < 500 ? (
                <>
                    <SearchForm setQuery={setQuery}/>
                    {loading ? (
                        searchParam && <Movies movies={movies} page={page} setQuery={setQuery} totalpage={total_pages}/>
                    ) : (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <Puff
                                color="#00BFFF"
                                height={100}
                                width={100}
                            />
                        </div>
                    )}
                </>
            ) : (
                <NotFoundPage/>
            )}
        </div>
    );
};

export {SearchPage};