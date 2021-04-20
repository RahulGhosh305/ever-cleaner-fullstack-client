import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import Book from '../Book/Book.jsx';
import BookingList from '../BookingList/BookingList.jsx';
import Review from '../Review/Review.jsx';
import OrderList from '../OrderList/OrderList.jsx';
import AddService from '../AddService/AddService.jsx';
import MakeAdmin from '../MakeAdmin/MakeAdmin.jsx';
import ManageService from '../ManageServices/ManageService.jsx';


const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [checkAdmin, setCheckAdmin] = useState([])
    console.log(checkAdmin)

    useEffect( ()=>{
        fetch(`https://fast-springs-42794.herokuapp.com/getAdmin?email=`+loggedInUser.email)
        .then(res => res.json())
        .then(emails => setCheckAdmin(emails))
    },[loggedInUser.email])




    return (
        <div className='container'>
            <Navbar></Navbar>
            <div className='row'>
                <div style={{backgroundColor: '#ddd', height: '100vh', borderRadius : '25px'}} className="col-lg-3 col-md-3 col-sm-3 col-12">


                    {
                        checkAdmin ? 
                        <div>
                            <button className="mt-5 btn btn-secondary w-100 rounded-pill">Book</button>
                            <button className="mt-2 btn btn-secondary w-100 rounded-pill">Booking Lists</button>
                            <button className="mt-2 btn btn-secondary w-100 rounded-pill">Review</button>

                            <button className="mt-5 btn btn-secondary w-100 rounded-pill">Order List</button>
                            <button className="mt-2 btn btn-secondary w-100 rounded-pill">Add Service</button>
                            <button className="mt-2 btn btn-secondary w-100 rounded-pill">Make Admin</button>
                            <button className="mt-2 btn btn-secondary w-100 rounded-pill">Manage Services</button>
                        </div> 
                        : 
                        <div>
                            <button  className="mt-5 btn btn-secondary w-100 rounded-pill">Book</button>
                            <button className="mt-2 btn btn-secondary w-100 rounded-pill">Booking Lists</button>
                            <button className="mt-2 btn btn-secondary w-100 rounded-pill">Review</button>
                        </div>
                    }

                    
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-12 mt-2">
                    
                    <Book></Book>
                    <BookingList></BookingList>
                    <Review></Review>
                    <OrderList></OrderList>
                    <AddService></AddService>
                    <MakeAdmin></MakeAdmin>
                    <ManageService></ManageService>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;


