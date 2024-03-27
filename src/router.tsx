import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesList, MovieListCard, GenreList, MoviesByGenrePage, SearchPage, NotFoundPage} from "./pages";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index: true, element: <Navigate to={'/movies'}/>
            },
            {
                path: 'movies', element: <MoviesList/>
            },
            {
                path: 'movies/:id', element:<MovieListCard/>
            },
            {
                path: 'genres', element: <GenreList/>
            },
            {
                path: 'genres/:id_genre', element: <MoviesByGenrePage/>
            },
            {
                path: 'search', element: <SearchPage/>
            },
            {
                path: '*', element: <NotFoundPage/>
            }
        ]
    }
]);

export {
    router
}