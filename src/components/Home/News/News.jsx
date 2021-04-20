import React from 'react';
import { Link } from 'react-router-dom';
import news1 from '../../../images/news1.jpg';
import news2 from '../../../images/news2.jpg';
import news3 from '../../../images/news3.jpg';
// import person1 from '../../../images/news3.jpg';
// import person2 from '../../../images/news3.jpg';
// import person3 from '../../../images/news3.jpg';

const News = () => {
    return (
        <div className="container pt-5">
            <h2 className="text-center">Latest News</h2>
            <p className="lead text-center">Read some of our latest stories from across the LeanPro organization below, and then
            browse our <br/> archive to learn more about projects from years past.</p>

            <div className='row mt-3'>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                    <div className="card shadow">
                        <img src={news1} class="card-img-top" alt="..." />
                        
                        <div className="card-body">
                            <p className='lead font-italic pb-3'>29 May 2020</p>
                            <h4 className="card-title">How To Clean Grout and Remove Stains</h4>
                            <p className="card-text pb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            {/* <div class="media mt-3">
                                <img style={{width: '64px', height: '64px', borderRadius: '50%'}} src={news1} class="align-self-center mr-3 img-fluid" alt="..."/>
                                <div class="media-body my-auto">
                                    <h6 class="mt-0"><span className="text-muted font-italic">By</span> Center-aligned media</h6>
                                </div>
                            </div> */}
                            <Link to="">Learn more...</Link>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                    <div className="card shadow">
                        <img src={news3} class="card-img-top" alt="..." />
                        
                        <div className="card-body">
                            <p className='lead font-italic pb-3'>25 April 2020</p>
                            <h4 className="card-title">The Top 3 Germiest Places in Your Office</h4>
                            <p className="card-text pb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            {/* <div class="media mt-3">
                                <img style={{width: '64px', height: '64px', borderRadius: '50%'}} src={news3} class="align-self-center mr-3 img-fluid" alt="..."/>
                                <div class="media-body my-auto">
                                    <h6 class="mt-0"><span className="text-muted font-italic">By</span> Center-aligned media</h6>
                                </div>
                            </div> */}
                            <Link to="">Learn more...</Link>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 mx-auto'>
                    <div className="card shadow">
                        <img src={news2} class="card-img-top" alt="..." />
                        
                        <div className="card-body">
                            <p className='lead font-italic pb-3'>05 February 2020</p>
                            <h4 className="card-title">The Three Rules of Maid Service Etiquette</h4>
                            <p className="card-text pb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            {/* <div class="media mt-3">
                                <img style={{width: '64px', height: '64px', borderRadius: '50%'}} src={news2} class="align-self-center mr-3 img-fluid" alt="..."/>
                                <div class="media-body my-auto">
                                    <h6 class="mt-0"><span className="text-muted font-italic">By</span> Center-aligned media</h6>
                                </div>
                            </div> */}
                            <Link to="">Learn more...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;