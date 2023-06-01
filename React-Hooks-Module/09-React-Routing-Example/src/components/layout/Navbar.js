import React from "react";
import {Link} from 'react-router-dom';

let Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">React Routing</Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/employees" className="nav-link">Employees</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/stocks" className="nav-link">Stocks</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;
