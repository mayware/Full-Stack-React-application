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
                <div className="header-right">
                    <div className="header-cart">
                        <Link to="/">
                            <h4>Cart</h4>
                        </Link>
                    </div>
                    <div className="header-user">
                        <Link to="/">
                            <h4>Log in</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;