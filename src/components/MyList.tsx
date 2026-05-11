import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function MyList({ children }: { children: React.ReactNode }) {
    const {theme} = useContext(ThemeContext);
    return (
        <ul className={`myList-${theme}`}>
            {children}
        </ul>
    );
}

export default MyList;