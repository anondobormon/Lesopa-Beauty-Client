import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Leospa</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/home' class="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/userBooking' class="nav-link active" aria-current="page" href="#">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/admin/makeAdmin' class="nav-link active" aria-current="page" href="#">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/login' class="nav-link active" aria-current="page" href="#">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;