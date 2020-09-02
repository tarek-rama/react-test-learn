import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class Navbar extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
        });
    }
    render(){
        return(
            <div>
            <nav>
                <div className="nav-wrapper">
                <div className="container">
                <Link to="/"className="brand-logo">Logo</Link>
                <Link to="#!" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Products</Link></li>
                    <li>
                        <Link to="/cart">
                        <i className="material-icons">shopping_cart</i>
                        </Link>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                </div>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Products</Link></li>
                <li>
                    <Link to="/cart">
                    <i className="material-icons">shopping_cart</i>
                    </Link>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        )
    }
}

export default Navbar;