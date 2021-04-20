import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURl] = useState(null);

    const onSubmit = data => {
        const serviceData = {
            title : data.serviceTitle,
            description : data.description,
            imageURL : imageURL,
        }

        const URL = `http://localhost:5000/addService`;
        fetch(URL, {
            method : 'POST',
            headers : {
                'content-type' : 'application/json',
            },
            body : JSON.stringify(serviceData)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Service Data Successfully Saved.')
            }
        })
    }

const handleImageUpload = (event) => {
    console.log(event.target.files[0])
    const imageData = new FormData()
    imageData.set('key', 'a246b045a78484bd307e45fbf7eb0ee7')
    imageData.append('image', event.target.files[0])

    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
        .then(response => {
            setImageURl(response.data.data.display_url);
        })
        .catch(error => {
        console.log(error);
        });
    }

    return (
        <div>
            <div className="card shadow-lg">
                <div className="card-body">
                    <h3 class="card-title">Add Service</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
        
                        <input className="form-control" {...register("serviceTitle", { required: true })} placeholder="Service Title" />
                        {errors.serviceTitle && <span>This field is required</span>}
                        <br />

                        <input className="form-control" {...register("description", { required: true })} placeholder="Description" />
                        {errors.description && <span>This field is required</span>}
                        <br />

                        <label htmlFor="">Image :</label><br/>
                        <input onChange={handleImageUpload} type='file' />
                        <br />
                        <br/>
                        
                        <input className='btn-primary' type="submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;