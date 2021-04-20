import React from 'react';

const About = () => {
    return (
        <div className="container-fluid pt-5">
            <h2 className="text-center mt-3">About Us</h2>
            <p className="lead text-center">Welcome To Our EVER CLEAN Services</p>
            <div className="row mt-3">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                    <iframe width='100%' height="100%" src="https://www.youtube.com/embed/fyI410zm2_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 my-auto">
                    <p className="text-justify lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio est error aspernatur, fugiat sequi doloribus exercitationem, quos nesciunt qui accusamus illum aliquid. Ab quis qui eos sed! Aliquid aperiam omnis  quos nesciunt qui accusamus illum aliquid. Ab quis qui eos sed! Aliquid aperiam omnis odio est error aspernatur, fugiat sequi doloribus exercitationem, quos nesciunt qui accusamus illum aliquid. Ab quis qui eos sed! Aliquid aperiam omnis  quos nesciunt qui accusamus illum aliquid. Ab quis qui eos sed! Aliquid aperiam omnis.</p>
                </div>
            </div>
        </div>
    );
};

export default About;