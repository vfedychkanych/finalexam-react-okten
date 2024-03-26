import React, { FC } from "react";
import { IGenre } from "../../interfaces";
import { NavLink } from "react-router-dom";
import css from "./Genres.module.css";
import {useAppSelector} from "../../hooks";

interface IProps {
    genre: IGenre;
}

const Genres: FC<IProps> = ({ genre}) => {
    const { genres } = genre;
    let {loadingGenre} = useAppSelector(state => state.genres);
    return (
        <div className={css.main}>
            <div className={css.genresContainer}>
            {loadingGenre&&genres ? genres.map((genre) => (
                <div key={genre.id} className={css.badge}>
                    <NavLink className={css.genreLink} to={`${genre.id}`}>
                        {genre.name}
                    </NavLink>
                </div>
            )) : <h1>LOADING...</h1>}
            </div>
        </div>
    );
};

export { Genres };
