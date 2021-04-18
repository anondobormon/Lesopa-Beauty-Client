import React, { useState } from 'react';
import './ServiceItem.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



const ServiceItem = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://lit-ravine-67138.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data);
            })
    }, [])


    return (
        <section className='row services'>
            {
                services.map(service =>

                    <div className="col-md-4">

                        <div class="card service-card " style={{ width: '90%' }} >
                            <div className="card-img">
                                <img src={service.img} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body text-center">
                                <h5 style={{ fontSize: '25px', color: '#ff817e' }} class="card-title ">{service.serviceTitle}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content . Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt.</p>
                                <Link to='/user/dashboard'><button className='btn btn-appointment'>Book Appointment</button></Link>
                            </div>
                        </div>
                    </div>


                )
            }
        </section >
    );
};

export default ServiceItem;