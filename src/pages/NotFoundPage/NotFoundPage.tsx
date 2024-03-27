import {FC} from "react";
import {Link} from "react-router-dom";
import css from "./NotFoundPage.module.css";

interface IProps{

}

const NotFoundPage:FC<IProps> = () => {
    return (
        <div className={css.container}>
            <img src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" alt="404 Error" className={css.image} />
            <h1 className={css.heading}>404 - Сторінку не знайдено</h1>
            <p className={css.paragraph}>На жаль, сторінка, яку ви шукаєте, не знайдена.</p>
            <p className={css.paragraph}>Будь ласка, перевірте URL-адресу, або перейдіть на <Link className={css.link} to="/">головну сторінку</Link>.</p>
        </div>
    );
};

export {NotFoundPage};