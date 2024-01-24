import React, { useState } from 'react';
import Inputs from '../Components/shared/inputs';
import {useNavigate} from "react-router-dom";


interface LoginProps {
    login: () => void; // Declare the callback function
}
const Login: React.FC<LoginProps> = ({login}) => {
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
        login();
        navigate('/home');
    };

    return (
        <div>
            <div className="flex flex-row items-center">
                <div className="px-4 bg-[#031434] w-[480px]">
                    <div className="h-screen flex bg-contain bg-no-repeat bg-center bg-login-bg">
                    </div>
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
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            isValid={isPasswordValid}
                            max={6}
                        />
                        <button onClick={handleLogin}
                                disabled={!validateEmail(email) || !validatePassword(password)}                                className="
                        bg-[#0A74DC] rounded-md w-[330px] h-[48px] justify-center items-center text-white text-center text-base leading-6 font-medium mb-6"
                        >Log in</button>
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
