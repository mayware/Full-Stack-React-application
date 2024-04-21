import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-left">
                    <Link to="/">
                        <h1>Main store</h1>
                    </Link>
                </div>
                <div className="header-right">
                    <div className="header-cart">
                        <Link to="/">
                            <h3>Cart</h3>
                        </Link>
                    </div>
                    <div className="header-user">
                        <Link to="/">
                            <h3>Log in</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;