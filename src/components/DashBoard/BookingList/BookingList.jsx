import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingListRow from './BookingListRow';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [bookingList, setBookingList] = useState([])
    useEffect( ()=> {
        fetch("http://localhost:5000/getBooking?email="+loggedInUser.email)
        .then(res => res.json())
        .then(data => setBookingList(data))
    },[loggedInUser.email])


    return (
        <div>
            <h3>Booking List</h3>
            <div className="row">
                {
                    bookingList.map(singleBooking => <BookingListRow singleBooking={singleBooking} key={singleBooking._id}></BookingListRow>)
                }
            </div>
        </div>
    );
};

export default BookingList;