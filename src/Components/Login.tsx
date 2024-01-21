import React, { useState } from 'react';
import Inputs from './inputs';
import Button from "./button";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        setEmail(emailValue);
        setIsEmailValid(validateEmail(emailValue));
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        setIsPasswordValid(validatePassword(passwordValue));
    };

    const validateEmail = (email: string): boolean => {
        // Basic email validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string): boolean => {
        // Password validation: At least 6 characters, combination of letters and numbers
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
        return passwordRegex.test(password);
    };

    const handleForgotPasswordClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Add your custom logic for the "Forgot your password?" link here
        console.log("Forgot password clicked!");
    };

    const handleLogin = () => {
        navigate('/home');
    };

    return (
        <div>
            <div className="flex flex-row items-center">
                <div className="h-screen flex w-[480px] bg-[#031434] bg-contain bg-no-repeat bg-center bg-login-bg">
                </div>
                <div className="flex flex-col m-auto w-[457px] h-[564px] border border-[#a4a7b74d] bg-white mx-[283px] py-[36px] px-[66px]">
                    <div className="text-[#434854] text-2xl font-semibold leading-8">Login</div>
                    <div className="text-[#737373] pt-2 pb-16 text-base font-normal leading-6">Kindly enter your details to log in </div>
                    <form className="flex flex-col">
                        <Inputs
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            isValid={isEmailValid}
                        />
                        <Inputs
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            isValid={isPasswordValid}
                        />
                        <Button
                            buttonText="Login in" onClick={handleLogin}

                        />
                    </form>
                    <a href="#" onClick={handleForgotPasswordClick}
                    className="text-[#0A74DC] text-sm font-normal leading-4 underline text-center mb-24">
                        Forgot your password?
                    </a>
                    <div className="text-[#303B54] text-xs font-normal leading-5 underline text-center"
                    > Privacy Policy
                        <span className="text-[#B0B9C8] text-xs font-normal leading-5 no-underline"> and </span>
                        Terms of services
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
