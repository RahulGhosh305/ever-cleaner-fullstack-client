import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceCard = (props) => {
    const {title, description, imageURL, _id} = props.singleService
    const history = useHistory()

    const goServiceHandle = (id) => {
        history.push(`/services/${id}`)
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card shadow">
                        <img src={imageURL} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">{title}</h5>
                            <p className="card-text lead">{description}</p>
                            <div className='d-flex justify-content-center mt-3'>
                                <button onClick={ ()=> goServiceHandle(_id)} className="btn btn-outline-primary">Go Service</button>
                            </div>
                        </div>
                    </div>
                </div>
        );
};

export default ServiceCard;