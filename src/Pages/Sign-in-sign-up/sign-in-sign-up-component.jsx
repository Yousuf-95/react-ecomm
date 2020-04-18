import React from 'react';
import './sign-in-sign-up.scss';
import SignIn from '../../Components/sign-in-component';
import SignUp from '../../Components/signup-component';

const SignInAndSignUpPage = () => (
    <div className = 'sign-in-and-sign-up'><SignIn /> <SignUp /> </div>
);

export default SignInAndSignUpPage;
