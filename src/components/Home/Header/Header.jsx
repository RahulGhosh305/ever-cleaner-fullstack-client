import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="d-flex justify-content-end">
                <div className="middle">
                    <h5>Quality cleaning at a fair price.</h5>
                    <p className="display-4">Clean Home <br/> Professional Service.</p>
                    <button className="btn btn-primary rounded mt-3">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Header;