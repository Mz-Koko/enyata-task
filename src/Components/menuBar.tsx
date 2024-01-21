import React from "react";

const MenuBar: React.FC = () => {

    return (
        <div className="flex flex-row justify-end items-center h-16 shadow-md w-full gap-8 pr-10">
            <div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM8 17H16V11C16 8.52 14.49 6.5 12 6.5C9.51 6.5 8 8.52 8 11V17Z" fill="#333758"/>
            </svg></div>
            <div className="border border-[#E5E5E5] w-0.5 h-6"></div>
            <div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 29.9998C6.7099 29.9998 0 23.2816 0 15C0 6.70967 6.70876 0 15 0C23.2903 0 29.9998 6.70876 29.9998 15C29.9998 23.2896 23.2809 29.9998 15 29.9998Z" fill="#66A9DF"/>
                <path d="M15 0V29.9998C23.2809 29.9998 29.9998 23.2896 29.9998 15C29.9998 6.70898 23.2903 0 15 0Z" fill="#4F84CF"/>
                <path d="M15 18.5156C10.6354 18.5156 6.47388 20.4236 3.4325 24.549C9.48894 31.8697 20.6993 31.8073 26.6741 24.4183C25.1987 22.9507 21.8756 18.5156 15 18.5156Z" fill="#D6F3FE"/>
                <path d="M26.6741 24.4183C23.8534 27.9062 19.6211 29.9998 15 29.9998V18.5156C21.8758 18.5156 25.1987 22.9511 26.6741 24.4183Z" fill="#BDECFC"/>
                <path d="M15 15.8789C12.0921 15.8789 9.72656 13.5132 9.72656 10.6055V8.84766C9.72656 5.93994 12.0921 3.57422 15 3.57422C17.9077 3.57422 20.2734 5.93994 20.2734 8.84766V10.6055C20.2734 13.5132 17.9077 15.8789 15 15.8789Z" fill="#D6F3FE"/>
                <path d="M15 3.57422V15.8789C17.9079 15.8789 20.2734 13.5134 20.2734 10.6055V8.84766C20.2734 5.93971 17.9079 3.57422 15 3.57422Z" fill="#BDECFC"/>
            </svg></div>
            <div className="karla-regular text-[#303B54] text-base tracking-[-0.117px]">John Doe</div>
            <div className="ml-[27px] cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="3" viewBox="0 0 17 3" fill="none">
                <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
                <circle cx="8.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
                <circle cx="15.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
            </svg></div>
        </div>
    );
};

export default MenuBar