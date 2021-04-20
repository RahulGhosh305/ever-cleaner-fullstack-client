import React from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = email => {
        const adminEmail = email
        
        fetch('http://localhost:5000/makeAdmin', {
            method : "POST",
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(adminEmail)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('New Admin Created')
            }
        })
    }


    return (
        <div>
            <div className="card shadow-lg">
                <div className="card-body">
                    <h3 class="card-title">Make Admin</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" {...register("Email", { required: true })} placeholder="example@gmail.com" />
                        {errors.Email && <span>This field is required</span>}
                        <br />

                        <input className='btn-primary' type="submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;