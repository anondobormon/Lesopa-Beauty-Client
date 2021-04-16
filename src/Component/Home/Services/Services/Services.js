import React from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';

const Services = () => {
    return (
        <div>
            <div className="">
                <div className="col-md-6 our-services">
                <h1>Our Services</h1>
                <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ab id quaerat inventore porro fugiat libero.</small></p>
                </div>
            </div>
            <ServiceItem></ServiceItem>
        </div>
    );
};

export default Services;