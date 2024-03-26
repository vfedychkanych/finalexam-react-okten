import {NavLink} from "react-router-dom";
import css from "./Header.module.css"
import {useContext, useEffect} from "react";
import {Context} from "../../layouts";

const Header = () => {
    const [switcher, setSwitcher] = useContext(Context);

    const toggleSwitcher = () => {
        const newSwitcherValue = !switcher;
        setSwitcher(newSwitcherValue);
        localStorage.setItem('switcher', JSON.stringify(newSwitcherValue));
    };

    useEffect(() => {
        const savedSwitcher = localStorage.getItem('switcher');
        if (savedSwitcher !== null) {
            setSwitcher(JSON.parse(savedSwitcher));
        }
    }, [setSwitcher]);

    return (
        <div className={css.container}>
            <h2>The Movie DataBase</h2>
            <NavLink to={'movies'}> Movies </NavLink>
            <NavLink to={'genres'}> Genres </NavLink>
            <NavLink to={'search'}> Search </NavLink>

            <label className={css.switch}>
                <input type="checkbox" onChange={toggleSwitcher} checked={switcher} />
                <span className={css.slider}></span>
            </label>
        </div>
    );
};

export { Header };