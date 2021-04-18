import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../../Image/bg1.jpg';
import Image2 from '../../../Image/bg2.jpg';
import Image3 from '../../../Image/bg3.jpg';
import './Header.css'

const Header = () => {
    const loggedUserEmail = sessionStorage.getItem('email')
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row p-5">
                            <div className="col-md-6 success">
                                <h4>Beauty and Success <br />Starts here.</h4>
                                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla fugiat eius. Ipsa similique, corporis sequi eum ipsam nobis quod.</small></p>
                                
                                <Link to='/user/dashboard'><button className='btn btn-brand'>Book Appointment</button></Link>
                                {
                                    !loggedUserEmail && <Link to='/login'><button className='btn btn-primary'>Sign In</button></Link>
                                }
                            </div>
                            <div className="col-md-6 image">
                                <img src={Image1} class="d-block " alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row p-5">
                            <div className="col-md-6 success">
                                <h4>Beauty and Success <br />Starts here.</h4>
                                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla fugiat eius. Ipsa similique, corporis sequi eum ipsam nobis quod.</small></p>
                                
                                <Link to='/user/dashboard'><button className='btn btn-brand'>Book Appointment</button></Link>
                                {
                                    !loggedUserEmail && <Link to='/login'><button className='btn btn-primary'>Sign In</button></Link>
                                }
                            </div>
                            <div className="col-md-6 image">
                                <img src={Image2} class="d-block " alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row p-5">
                            <div className="col-md-6 success">
                                <h4>Beauty and Success <br />Starts here.</h4>
                                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla fugiat eius. Ipsa similique, corporis sequi eum ipsam nobis quod.</small></p>
                                
                                <Link to='/user/dashboard'><button className='btn btn-brand'>Book Appointment</button></Link>
                                {
                                    !loggedUserEmail && <Link to='/login'><button className='btn btn-primary'>Sign In</button></Link>
                                }
                            </div>
                            <div className="col-md-6 image">
                                <img src={Image3} class="d-block " alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Header;