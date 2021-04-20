import React from 'react';

const Offer = () => {
    return (
        <div className="container pt-5">
            <h2 className="text-center">We Offer</h2>
            <p className="lead text-center">This unique tool allows you to easily create price estimation  forms to give your <br/>
            client idea of the cost of your service.</p>

            <div className="row mt-3">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div class="card shadow-lg p-3">
                        <div class="card-body text-center">
                            <h5 class="card-title pb-3">STANDARD</h5>
                            <p class="card-subtitle mb-2 display-4 text-primary">$349.00</p>
                            <h6 className="text-primary">/ per month</h6>
                
                            <p class="card-text lead">3 Bedrooms cleaning</p>
                            <p class="card-text lead">Vacuuming</p>
                            <p class="card-text lead">2 Bathroom cleaning</p>
                            <p class="card-text lead">Mirror Cleaning</p>
                            <p class="card-text lead">1 Livingroom cleaning</p>
                            <p class="card-text lead">Window Sills</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div class="card shadow-lg p-3">
                        <div class="card-body text-center">
                            <h5 class="card-title pb-3">PREMIUM</h5>
                            <p class="card-subtitle mb-2  display-4 text-primary">$511.00</p>
                            <h6 className="text-primary">/ per month</h6>
                
                            <p class="card-text lead">5 Bedrooms cleaning</p>
                            <p class="card-text lead">Vacuuming</p>
                            <p class="card-text lead">5 Bathroom cleaning</p>
                            <p class="card-text lead">Mirror Cleaning</p>
                            <p class="card-text lead">3 Livingroom cleaning</p>
                            <p class="card-text lead">Window Sills</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                    <div class="card shadow-lg p-3">
                        <div class="card-body text-center">
                            <h5 class="card-title pb-3">ENTERPRISE</h5>
                            <h1 class="card-subtitle mb-2 text-primary display-4">$569.00</h1>
                            <h6 className="text-primary">/ per month</h6>
                
                            <p class="card-text lead">7 Bedrooms cleaning</p>
                            <p class="card-text lead">Vacuuming</p>
                            <p class="card-text lead">7 Bathroom cleaning</p>
                            <p class="card-text lead">Mirror Cleaning</p>
                            <p class="card-text lead">5 Livingroom cleaning</p>
                            <p class="card-text lead">Window Sills</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;