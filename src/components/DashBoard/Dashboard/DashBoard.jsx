import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Book from '../Book/Book.jsx';
import Review from '../Review/Review.jsx'
import AddService from '../AddService/AddService.jsx';
import BookingList from '../BookingList/BookingList.jsx';
import MakeAdmin from '../MakeAdmin/MakeAdmin.jsx';
import ManageService from '../ManageServices/ManageService.jsx';
import OrderList from '../OrderList/OrderList.jsx';
import { UserContext } from "../../../App.js";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../Home/Navbar/Navbar.jsx";
import './SideNavbar.css'

const routes = [
    {
        path: "/book",
        exact: true,
        main: () => <Book></Book>
    },
    {
        path: "/bookingList",
        main: () => <BookingList></BookingList>
    },
    {
        path: "/review",
        main: () => <Review></Review>
    },
    {
        path: "/orderList",
        main: () => <OrderList></OrderList>
    },
    {
        path: "/addService",
        main: () => <AddService></AddService>
    },
    {
        path: "/makeAdmin",
        main: () => <MakeAdmin></MakeAdmin>
    },
    {
        path: "/manageService",
        main: () => <ManageService></ManageService>
    },
];


export default function DashBoard() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [checkAdmin, setCheckAdmin] = useState([])

    useEffect(() => {
        fetch(`https://fast-springs-42794.herokuapp.com/getAdmin?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(emails => setCheckAdmin(emails))
    }, [loggedInUser.email])

    return (
        <>
            <div className='container'>
                <Navbar></Navbar>
            </div>
            <Router>
                <div className='container'>
                    <div className='row'>
                        <div style={{ backgroundColor: '#ddd', height: '100vh', borderRadius: '25px', }} className="col-lg-3 col-md-3 col-sm-3 col-12">
                            { checkAdmin ?
                                <ul className='list-group'>
                                    <li className='custom-link'>
                                        <Link className='sideNavbarLink' to="/book" >Book</Link>
                                    </li>
                                    <li className='custom-link'>
                                        <Link className='sideNavbarLink' to="/bookingList">Booking List</Link>
                                    </li>
                                    <li className='custom-link'>
                                        <Link className='sideNavbarLink' to="/review">Review</Link>
                                    </li>
                                    <li className='custom-link'>
                                        <Link className='sideNavbarLink' to="/orderList">Order List</Link>
                                    </li>
                                    <li className='custom-link'>
                                        <Link className='sideNavbarLink' to="/addService">Add Service</Link>
                                    </li>
                                    <li className='custom-link'>
                                        <Link className='sideNavbarLink' to="/makeAdmin">Make Admin</Link>
                                    </li>
                                    <li className='custom-link'>
                                        <Link className='sideNavbarLink' to="/manageService">Manage Services</Link>
                                    </li>
                                </ul>
                                
                                :
                                
                                <ul className='list-group'>
                                    <li className='custom-link'>
                                        <Link className='sideNavbarLink' to="/book">Book</Link>
                                    </li>
                                    <li  className='custom-link'>
                                        <Link className='sideNavbarLink' to="/bookingList">Booking List</Link>
                                    </li>
                                    <li  className='custom-link'>
                                        <Link className='sideNavbarLink' to="/review">Review</Link>
                                    </li>
                                </ul>
                                    
                            }
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9 col-12 mt-2"> 
                            <h4 className='text-center'>Hello! Your Dashboard Here...</h4>
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch>                           
                        </div>
                    </div>
                </div>
            </Router>
        </>
    );
}


