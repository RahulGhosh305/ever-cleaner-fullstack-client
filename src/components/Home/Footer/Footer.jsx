import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faLongArrowAltRight, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <div style={{padding : '70px'}} className="bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                            <h4 className="pb-3">ABOUT US</h4>
                            <p>We offer a complete package for all our clients.</p>

                            <p className="my-3"><FontAwesomeIcon className='mr-1' icon={faMapMarkerAlt} />  Kandirpar, A.K Khan 56Road, Bangladesh </p>

                            <p><FontAwesomeIcon className='mr-1' icon={faPhoneAlt} /> (096) 888 4242</p>

                            <p><FontAwesomeIcon className='mr-1' icon={faEnvelope} /> everclear@gmail.com</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                            <h4 className="pb-3">OUR SERVICES</h4>
                            <ul style={{listStyleType: 'none', display: 'inline-block', paddingLeft : '0px'}}>
                                <li><FontAwesomeIcon icon={faLongArrowAltRight} /> Home Cleaning</li>
                                <li><FontAwesomeIcon icon={faLongArrowAltRight} /> Office Cleaning</li>
                                <li><FontAwesomeIcon icon={faLongArrowAltRight} /> Window Cleaning</li>
                                <li><FontAwesomeIcon icon={faLongArrowAltRight} /> Carpet Cleaning</li>
                                <li><FontAwesomeIcon icon={faLongArrowAltRight} /> Clutter Cleanup</li>
                                <li><FontAwesomeIcon icon={faLongArrowAltRight} /> Upholstery Cleaning</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                            <h4 className="pb-3">LATEST POSTS</h4>

                            <p>How To Clean Grout and Remove Stains
                            <br/><small>23 August 2018</small>
                            </p>
                            <p>The Top 3 Germiest Places in Your Office
                                <br/><small>14 August 2018</small>
                            </p>
                            
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <h4 className="pb-3">NEWSLETTER</h4>

                            <p>Subscribe & get 10% discount when you purchase clean equipments for the first time</p>

                            <form className="form-inline my-3 d-flex">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-success my-2" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-white text-center pb-3">
                <p>CopyRight 2020-2021 By Ever Clean Company</p>
            </div>
        </div>
    );
};

export default Footer;