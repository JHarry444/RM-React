import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <nav className={`navigation ${theme}`} >
            <Link to="/">Home</Link>
            <Link to="/demo">Demo</Link>
            <Link to="/components">Components</Link>
            <Link to="/conditional">Conditional</Link>
            <Link to="/props">Props</Link>
            <Link to="/external">External</Link>
            <Link to="/events">Events</Link>
            <Link to="/state">State</Link>
            <Link to="/lifting">Inverse Data Flow</Link>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </nav >
    );
}

export default Navbar;