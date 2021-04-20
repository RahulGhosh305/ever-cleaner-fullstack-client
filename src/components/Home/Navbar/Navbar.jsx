import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import Logo from '../../../images/logo.png';


import './Navbar.css';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div>
            <div className="d-flex justify-content-end mx-3 pt-1">
                <h6 className='pt-2'>Opening Hour : 10:00am - 05:00pm</h6>

                {/* <ul className="iconUnorderList">
                    <li className="topIcon"><FontAwesomeIcon icon={faFacebook} /></li>
                    <li className="topIcon"><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li className="topIcon"><FontAwesomeIcon icon={faGithub} /></li>
                    <li className="topIcon"><FontAwesomeIcon icon={faTwitter} /></li>
                </ul> */}
            </div>

            <nav className="navbar navbar-expand-lg navbar-light" id="nav">
                <Link className="navbar-brand"><img src={Logo} alt=""/></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item listItem">
                            <Link to='/home' className="nav-link">Home</Link>
                        </li>
                        {/* <li className="nav-item listItem">
                            <Link to='/about' className="nav-link">About</Link>
                        </li> */}
                        {/* <li className="nav-item listItem">
                            <Link to='/services' className="nav-link">Services</Link>
                        </li> */}
                        <li className="nav-item listItem">
                            <Link to='/dashboard' className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item listItem">
                            <Link to='/contact' className="nav-link">Contact</Link>
                        </li>
                        <li className="ml-2 nav-item">
                            {
                                loggedInUser.email ? <img src={loggedInUser.photoURL} alt="" className="rounded-circle" style={{width: '40px'}}/> :
                                <Link to='/login' className='btn btn-primary'> Login </Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;