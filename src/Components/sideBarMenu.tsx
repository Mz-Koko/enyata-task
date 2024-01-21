import React from 'react';
import {Link} from "react-router-dom";

const SideBarMenu: React.FC = () =>  {
    return (
        <div className="flex flex-col bg-[#031434] h-100vh pl-6 pr-4 pt-8">
            <div className="flex bg-home-img bg-contain bg-no-repeat bg-center text-[#031434]">d</div>
            <div className="flex flex-row bg-[#0A74DC] rounded w-[232px] h-12 mt-[30px] px-6 py-4 gap-4 items-center">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3H10.2V10.2H3V3ZM3 13.8H10.2V21H3V13.8ZM13.8 3H21V10.2H13.8V3ZM13.8 13.8H21V21H13.8V13.8Z" fill="white"/>
                </svg></div>
                <Link to="/home" className="text-base font-semibold leading-6 text-white cursor-pointer">Overview</Link>
            </div>
            <div className="flex flex-col pl-[27px] pt-[70px] gap-8">
                <Link to="/starships" className="flex flex-row gap-5 items-center">
                    <div className="bg-[#A9C1FF] h-4 w-[17px] rounded-md"></div>
                    <div className="text-base font-semibold leading-6 text-white">Starships</div>
                </Link>
                <Link to="/people" className="flex flex-row gap-5 items-center">
                    <div className="bg-[#FFA9EC] h-4 w-[17px] rounded-md"></div>
                    <div className="text-base font-semibold leading-6 text-white">People</div>
                </Link>
                <Link to="/species" className="flex flex-row gap-5 items-center">
                    <div className="bg-[#FDFFA9] h-4 w-[17px] rounded-md"></div>
                    <div className="text-base font-semibold leading-6 text-white">Species</div>
                </Link>
            </div>
        </div>
    );
};

export default SideBarMenu;