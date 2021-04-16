import React, { useState } from 'react';
import './ServiceItem.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



const ServiceItem = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
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

                        <div class="card" style={{ width: '18rem' }} />
                        <img src={service.img} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title text-color">{service.serviceTitle}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content . Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt.</p>
                            <Link to='/user/dashboard'><button className='btn btn-primary'>Book Appointment</button></Link>
                        </div>
                    </div>


                )
            }
        </section >
    );
};

export default ServiceItem;