import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Home/Navbar/Navbar';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('https://fast-springs-42794.herokuapp.com/sentMessageWithForm', {
            method : "POST",
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            alert("Message Sent Successfully")
        })
        console.log(data);
    }

    return (
        <div className="container">
            <Navbar></Navbar>
            <h4 className='text-center mt-3'>Contact Us</h4>
        
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" {...register("firstName", { required: true })} placeholder="FirstName"/>
                {errors.firstName && <span>This field is required</span>}
                <br/>

                <input className="form-control" {...register("lastName", { required: true })} placeholder="LastName"/>
                {errors.lastName && <span>This field is required</span>}
                <br/>

                <input className="form-control" {...register("email", { required: true })} placeholder="Email Address"/>
                {errors.email && <span>This field is required</span>}
                <br/>

                <input className="form-control" {...register("phone", { required: true })} placeholder="Phone Number"/>
                {errors.phone && <span>This field is required</span>}
                <br/>

                <input className="form-control" {...register("message", { required: true })} placeholder="Your Message"/>
                {errors.message && <span>This field is required</span>}
                <br/>
                
                <input className='btn-primary' type="submit" />

            </form>
        </div>
    );
};

export default Contact;