import React from 'react';
import '../../src/index.css';

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isValid: boolean;
}

const inputs: React.FC<InputProps> = ({type, placeholder, value, onChange, isValid}) => {
    return (
        <div className="App flex justify-center items-center mb-8">
            <label className='relative cursor-pointer'>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-[335px] h-[48px] px-6 text-sm ${
                        isValid ? 'border-[#A4A7B7] border-2' : 'border-red-500 border-2'
                    } rounded-lg border-opacity-50 outline-none focus:border-blue-500
            placeholder-gray-300 placeholder-opacity-0 transition duration-200`}
                />
                {!isValid && (
                    <span className="text-red-500 text-xs mt-1">Invalid {placeholder.toLowerCase()}</span>
                )}
                <span className='text-xs font-normal leading-6 text-[#0B2253] absolute
          left-0 top-4 mx-6 px-2 text-[#B0B9C8] transition duration-200 input-text'>
          {placeholder}
        </span>
            </label>
        </div>
    );
};

export default inputs;