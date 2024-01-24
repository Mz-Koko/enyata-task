import React from 'react';
import '../../index.css';

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isValid: boolean;
    max?: number;
}

const inputs: React.FC<InputProps> = ({type, max, placeholder, value, onChange, isValid}) => {
    return (
        <div className="App flex justify-center items-center mb-8">
            <label className='relative cursor-pointer'>
                <input
                    required
                    type={type}
                    maxLength={max}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-[335px] h-[48px] px-6 py-2 text-lg ${
                        isValid ? 'border-[#A4A7B7] border-2' : 'border-red-500 border-2'
                    } rounded-lg border-opacity-50 outline-none duration-200 peer focus:border-blue-500
            placeholder-gray-300 placeholder-opacity-0 bg-inherit`}
                />
                {!isValid && (
                    <span className="text-red-500 text-xs mt-1">Invalid {placeholder.toLowerCase()}</span>
                )}
                <span className='text-lg font-normal leading-6 text-[#B0B9C8] absolute
          left-0 top-2 mx-6 px-2 peer-focus:text-blue-500 pointer-events-none text-[#B0B9C8]
          transition duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-white
          ml-2 peer-valid:text-sm peer-valid:-translate-y-5'>
          {placeholder}
        </span>
            </label>
        </div>
    );
};

export default inputs;