import React from 'react';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="container ">
            <nav className="navbar navbar-expand-lg  site-navbar nav-area ">
  
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item  ">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item  ">
                        <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item  ">
                        <a className="nav-link " href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;