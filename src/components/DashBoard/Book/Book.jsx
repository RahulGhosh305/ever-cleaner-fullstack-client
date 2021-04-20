import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
//* Stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardPayment from './CardPayment.jsx';
const stripePromise = loadStripe('pk_test_51Ii3K1HPXDiAx2NzVpPTPHXoMtyBWuGzQRNk1EGBmYQvtNPMWKeLhO7NdvnZZK59BDaSTn1yLtFgRuYdGRCqQedO00djOrZfk1');
//* Stripe end


const Book = () => {
    const [paymentMethod, setPaymentMethod] = useState({})
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {name, email} = loggedInUser

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const margeAllData = {...paymentMethod,...data}
        console.log(margeAllData)

        fetch('https://fast-springs-42794.herokuapp.com/addOrder', {
            method : "POST",
            headers : {
                "content-type" : "application/json",
            },
            body : JSON.stringify(margeAllData)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert("Dear Customer, Your Order Booking Successfully.")
            }
        })
    };

    //* Get Query Data From ServiceDetails Component
    const link = window.location.href
    let url = `${link}`;
    let params = (new URL(url)).searchParams;
    const serviceTitle = params.get('name') 
    

    const passCardData = paymentMethod => {
        const {id} = paymentMethod
        const {brand} = paymentMethod.card
        const {type} = paymentMethod
        const cardDetails = {
            id : id,
            type : type,
            brand : brand
        }
        setPaymentMethod(cardDetails)
    }
    

    return (
        <div>
            <h3>Book</h3>
            <br/>
            <p className="text-danger">*Payment : Before submit, please pay to click first, After your payment completed then submit your Order.</p><br/>
            <Elements stripe={stripePromise}>
                    <CardPayment passCardData={passCardData}></CardPayment>
            </Elements>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={name} className="form-control" {...register("name", { required: true })}/>
                {errors.name && <span>This field is required</span>}
                <br />
                

                <input defaultValue={email} className="form-control" {...register("email", { required: true })}/>
                {errors.email && <span>This field is required</span>}
                <br />

                <input defaultValue={serviceTitle} className="form-control" {...register("service", { required: true })} />
                {errors.service && <span>This field is required</span>}
                
                <br/>
                <input className='btn-primary' type="submit" />
                
            </form>

        </div>
    );
};

export default Book;