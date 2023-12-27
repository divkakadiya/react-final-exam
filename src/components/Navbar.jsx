import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg w-100 navbar-dark">
            <div className="container">
                <a class="navbar-brand" href="#">
                    <h3>ECOM</h3>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse justify-content-end align-items-center" id='navbarSupportedContent'>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/product"} className="nav-link active" href="#">Product</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar