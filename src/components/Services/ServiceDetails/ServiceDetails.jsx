import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
    const history = useHistory()


    const [serviceDetail, setServiceDetail] = useState({})
    const [price, setPrice] = useState('')
    const [bookToOrder, setBookToOrder] = useState({})

    const { description, imageURL, title } = serviceDetail

    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/getSingleService/${id}`)
            .then(res => res.json())
            .then(data => setServiceDetail(data[0]))
    }, [id])


    const handleType = (e) => {
        const type = e.target.value;
        
        if(type === 'Standard'){
            let price = '$349'
            setPrice(price)
        }else if(type === 'Premium'){
            let price = '$511'
            setPrice(price)
        }
        else if(type === 'Enterprise'){
            let price = '$569'
            setPrice(price)
        }
        
        const toBooking = {
            title : title,
            description : description,
            imageURL : imageURL,
            type : e.target.value,
        }
        setBookToOrder(toBooking)
    }


    const handleBooking = (bookToOrder) => {
        const allBookingData = {...bookToOrder,price}
        console.log(allBookingData)
        fetch('http://localhost:5000/addBook', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json',
            },
            body : JSON.stringify(allBookingData)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert("Your Booking On Process...")
                history.push(`/dashboard?name=${title}`)
            }
        })
    }

    return (
        <div className='container'>
            <Navbar></Navbar>
            <div className="card my-5">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={imageURL} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title"> {title} </h3>
                            <div className="d-flex">
                                {/* <h6 className="card-title mr-5">Type :</h6> */}
                                <div className="d-flex">
                                    <h4 className='mr-2'>Choose One : </h4>
                                    <div className="form-check mr-2">
                                        <label className="form-check-label mt-1">
                                            <input onClick={handleType} value='Standard' type="radio" className="form-check-input" name="choose" />Standard
                                        </label>
                                    </div>

                                    <div className="form-check mr-2">
                                        <label className="form-check-label  mt-1">
                                            <input onClick={handleType} value='Premium' type="radio" className="form-check-input" name="choose" />Premium
                                        </label>
                                    </div>

                                    <div className="form-check disabled">
                                        <label className="form-check-label  mt-1">
                                            <input onClick={handleType} value='Enterprise' type="radio" className="form-check-input" name="choose" />Enterprise
                                        </label>
                                    </div>

                                </div>
                            
                                <h4 className=" ml-5 card-title">Price : {price}</h4>
                            </div>
                            <p className="card-text">{description}</p>

                            <button onClick={()=>handleBooking(bookToOrder)} className="btn-primary mt-3">Booking</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;