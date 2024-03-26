import {Outlet} from "react-router-dom";
import {Header} from "../components";
import css from "./MainLayout.module.css"
import {useState, createContext} from "react";

export type GlobalContent = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
const Context = createContext<GlobalContent>(null)

const MainLayout = () => {
    const [switcher, setSwitcher] = useState(false)
    return (
        <div className={switcher? css.darkBody : css.whiteBody}>
            <Context.Provider value={[switcher, setSwitcher]}>
                <Header />
                <Outlet />
            </Context.Provider>
        </div>
    );
};

export {MainLayout,
Context};