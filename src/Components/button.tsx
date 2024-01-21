import React, {ButtonHTMLAttributes} from "react";
import {Link} from "react-router-dom";

interface ButtonProps {
    onClick?: () => void;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonText: string;
}
const button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
    return (
        <div className={`bg-[#0A74DC] rounded-md w-[330px] h-[48px] justify-center items-center text-white text-center text-base leading-6 font-medium mb-6`}>
            <Link to="/"
              className="text-center mt-2">
            </Link>
            <button onClick={onClick}>{buttonText}</button>
        </div>

    );
};

export default button