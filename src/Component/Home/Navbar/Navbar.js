import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const loggedUserEmail = sessionStorage.getItem('email')
    const loggedUserName = sessionStorage.getItem('name')
    const [isAdmin, setIsAdmin] = useState()

    useEffect(()=> {
        fetch('https://lit-ravine-67138.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedUserEmail})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIsAdmin(data)
        })
    }, [loggedUserEmail])
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
                             {
                                 isAdmin && <li class="nav-item">
                                 <Link to='/admin/makeAdmin' class="nav-link active" aria-current="page" href="#">Admin</Link>
                             </li>
                             }
                            
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">About Us</Link>
                            </li>
                            <li class="nav-item">
                                {!loggedUserEmail ? 
                                <Link to='/login' class="nav-link active" aria-current="page" href="#">Login</Link>
                                 : 
                                 <Link to='/login'
                                 class="nav-link active" 
                                 style={{color:'tomato', fontWeight:'700'}}
                                 >{loggedUserName}</Link>
                                 }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;