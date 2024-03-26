import {FC, useState} from "react";

import {ISetState} from "../../types";
import {useForm} from "react-hook-form";
import {SetURLSearchParams} from "react-router-dom";
import css from "./SearchForm.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../store";


interface IProps{
}

const SearchForm:FC<IProps> = () => {
    const {register, reset, handleSubmit} = useForm({
        mode: 'all'
    });

    let dispatch = useAppDispatch();
    const {formSubmitted} = useAppSelector(state => state.movies);

    const giveMovie = (e: any) => {
        dispatch(movieAction.setSearchParam(e.name))
        dispatch(movieAction.setFormSubmitted(true))
        reset()
    };

    return (
        <div className={formSubmitted ? css.mainDivSubmitted : css.mainDiv}>
            <form className={css.formContainer} onSubmit={handleSubmit(giveMovie)}>
                <input
                    className={css.inputField}
                    type="text"
                    placeholder="Search Movie"
                    {...register('name')}
                />
                <button className={css.submitButton} type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export { SearchForm };