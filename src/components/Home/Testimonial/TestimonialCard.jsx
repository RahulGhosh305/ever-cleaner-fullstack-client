import React from 'react';

const TestimonialCard = (props) => {
    const {date, Name, Review, imageURL} = props.singleReview
    return (
        <div className="col-lg-6 col-md-6 col-sm-12">
                    <div class="card shadow mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4 my-auto d-flex justify-content-center">
                                <img style={{width : '150px', height: '150px', borderRadius : '50%'}} src={imageURL} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-center">{Name}</h5>
                                    <p class="card-text">{Review}</p>
                                    <p class="card-text"><small class="text-muted">{(new Date(date)).toDateString()}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default TestimonialCard;