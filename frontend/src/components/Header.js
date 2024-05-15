import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-left">
                    <Link to="/">
                        <h2>Main store</h2>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;