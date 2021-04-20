import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingListRow from './BookingListRow';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [bookingList, setBookingList] = useState([])
    useEffect( ()=> {
        fetch("https://fast-springs-42794.herokuapp.com/getBooking?email="+loggedInUser.email)
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