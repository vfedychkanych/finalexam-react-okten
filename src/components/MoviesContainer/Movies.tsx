import React, { FC } from "react";
import { IMovie } from "../../interfaces";
import { Movie } from "./Movie";
import { SetURLSearchParams } from "react-router-dom";
import css from "./Movies.module.css";

interface IProps {
    movies: IMovie[];
    page: string;
    totalpage: number;
    setQuery: SetURLSearchParams;
}

const Movies: FC<IProps> = ({ movies, setQuery, page, totalpage }) => {
    const prev = () => {
        if (+page !== 1) {
            setQuery({ page: (+page - 1).toString() });
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };
    const next = () => {
        if (+page !== totalpage) {
            setQuery({ page: (+page + 1).toString() });
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className={css.allContand}>
            <div className={css.moviesContainer}>
                {movies.map((movie) => (
                    <div key={movie.id} className={css.movieWrapper}>
                        <Movie movie={movie} />
                    </div>
                ))}
            </div>
            {(movies.length > 0)&&<div className={css.pagination}>
                <button onClick={prev} disabled={+page === 1} className={+page === 1 ? css.disabledButton : ''}>
                    Prev
                </button>
                <div className={css.pages}>
                    <h3>{page}</h3>
                </div>
                <button onClick={next} disabled={+page === totalpage} className={+page === totalpage ? css.disabledButton : ''}>
                    Next
                </button>
            </div>}
        </div>
    );
};

export { Movies };
