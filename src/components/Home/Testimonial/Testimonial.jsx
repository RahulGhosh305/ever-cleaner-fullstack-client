import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect( () => {
        fetch('https://fast-springs-42794.herokuapp.com/getReview')
        .then(res => res.json())
        .then(result => setReview(result))
    },[])

    return (
        <div className="container py-5">

            <h2 className="text-center">Testimonials</h2>
            <p className="lead text-center">We rigorously vet all of our Cleaners, please see a selection of quotes from our Channel Partners below.</p>
            <div className="row mt-3">
            {
                review.map(singleReview => <TestimonialCard singleReview={singleReview} key={singleReview._id}></TestimonialCard>)
            }
            </div>
        </div>
    );
};

export default Testimonial;