import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    ShopHub
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-links">
                        Home
                    </Link>
                    <Link to="/checkout" className="navbar-links">
                        Cart
                    </Link>
                </div>
                <div className="navbar-auth">
                    <div>
                        <Link to="/" className="btn btn-secondary">
                            Login
                        </Link>
                        <Link to="/" className="btn btn-primary">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    );

}

export default Navbar;