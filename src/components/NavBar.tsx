import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/demo">Demo</Link>
            <Link to="/components">Components</Link>
            <Link to="/conditional">Conditional</Link>
            <Link to="/props">Props</Link>
            <Link to="/external">External</Link>
            <Link to="/events">Events</Link>    
        </nav>
    );
}

export default Navbar;