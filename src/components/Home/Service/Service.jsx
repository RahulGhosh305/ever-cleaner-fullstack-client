import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/getServices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container pt-5">
            <h2 className="text-center">Our Main Services</h2>
            <p className="lead text-center">With an outstanding reputation for quality, integrity and service, we can
            <br/> clean anything you throw at us!</p>
            <div className="row mt-3">

            {
                services.map(singleService => <ServiceCard singleService={singleService} key={singleService._id}></ServiceCard>)
            }
                
            </div>
        </div>
    );
};

export default Service;