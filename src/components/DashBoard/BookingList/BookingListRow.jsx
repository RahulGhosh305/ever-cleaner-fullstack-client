import React from 'react';

const BookingListRow = (props) => {
    const {name, email, service, brand} = props.singleBooking
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="card shadow">
                <div className="card-body">
                    <h5 className="card-title text-center">{service}</h5>
                    <p className="card-text text-center">{email}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center">Name :{name}</li>
                    <li className="list-group-item text-center">Payment type : {brand}</li>
                </ul>
                <div className="card-body">
                    <h4 className="card-title text-center">Pending</h4>
                </div>
            </div>
        </div>
    );
};

export default BookingListRow;