import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState({
        isSignIn: false,
        name: '',
        email: ''
    })
    console.log(loggedInUser);


    var provider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    
    let { from } = location.state || { from: { pathname: "/" } }


    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                    isSignIn: true
                };

                sessionStorage.setItem('email', signedInUser.email);
                sessionStorage.setItem('name', signedInUser.name);
                console.log(result);
                setNewUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className='login'>
            <div className="col-md-3 login-section">
                <p>Enter Your Name</p>
                <input type="text" name="" id="" value='Anondo Bormon' /><br/>
                <p>Enter Password</p>
                <input type="password" name="" value='123456789' id=""/><br/>
                <button className='btn btn-danger' onClick={handleSignIn}>Google sing in</button>
            </div>
            
        </div>
    );
};

export default Login;