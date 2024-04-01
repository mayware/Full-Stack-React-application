import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/">
                    <h1>Main store</h1>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;