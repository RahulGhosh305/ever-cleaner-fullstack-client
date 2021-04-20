import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURl] = useState(null)

    const onSubmit = data => {
        const reviewData = {
            Name: data.Name,
            Review: data.Review,
            date : new Date(),
            imageURL : imageURL
        }
        console.log(reviewData)

        fetch('http://localhost:5000/addReview', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json',
            },
            body : JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Your Review Successfully Post')
            }
        })
    }

    const handleImageUpload = (e) => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'a246b045a78484bd307e45fbf7eb0ee7')
        imageData.append('image', e.target.files[0])

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
                    <h3 className="card-title">Review</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" {...register("Name", { required: true })} placeholder="Your Name" />
                        {errors.Name && <span>This field is required</span>}
                        <br />

                        <input className="form-control" {...register("Review", { required: true })} placeholder="Review" />
                        {errors.Review && <span>This field is required</span>}
                        <br />

                        <input onChange={handleImageUpload} type="file"/>
                        <br/>
                        <br />

                        <input className='btn-primary' type="submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;