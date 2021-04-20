import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import login from '../../images/login.jpg';
import cleaner from '../../images/cleaner.jpg';
import { UserContext } from '../../App';


import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from './firebaseConfig.js';
firebase.initializeApp(firebaseConfig)

if (firebase.apps.length === 0) {
    firebase.initializeApp({});
}

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] =  useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photoURL: '',
    })
    console.log(user)


    const provider = new firebase.auth.GoogleAuthProvider();
    // *Sign In Code Start
    const googleSignUpHandler = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            //* Sign-In successful.
            const { displayName, email, photoURL } = result.user;
            console.log(displayName, email, photoURL)
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL,
            }
            setUser(signedInUser)
            setLoggedInUser(signedInUser)
            history.replace(from);
            console.log("Sign-In successful.", displayName, email);
        })
        .catch((error) => {
            //* An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential, error);
        });
    }


    return (
        <div className="container">
            <div className="row">

                <div className="col-lg-5 col-md-6 col-sm-6 col-12 my-auto">
                    <div className='text-center'>
                        <img className='img-fluid' style={{ width: '150px', height: '150px' }} src={cleaner} alt="" />
                    </div>
                    <h4 className='text-center mb-4'>Login with</h4>
                    <button onClick={googleSignUpHandler} className="rounded-pill btn-primary form-control">Continue With Google</button>
                    <p className='text-center'>Don't have an account? <Link to=''>Create an account.</Link> </p>
                </div>

                <div className='col-lg-7 col-md-6 col-sm-6 col-12'>
                    <img className='img-fluid' style={{ height: '100vh' }} src={login} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Login;