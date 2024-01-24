import React, {useState} from 'react';

const SideBarMenu: React.FC = () =>  {
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    };

    return (
        <div className="flex flex-col bg-[#031434] pl-6 pr-4 pt-8 h-[1085px]">
                <a href="/home" className="flex bg-home-img bg-contain bg-no-repeat bg-center text-[#031434] cursor-pointer">
                    <div>d</div>
                </a>
            <div className="flex flex-row mt-[30px] px-6 py-4 gap-4 items-center">
                <a
                    href="/home"
                    className={`flex flex-row mt-[30px] px-6 py-4 gap-4 items-center ${
                        window.location.pathname === '/home' ? 'bg-[#0A74DC] rounded w-[232px] ' : ''
                    }`}
                    onClick={() => handleLinkClick('/home')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3H10.2V10.2H3V3ZM3 13.8H10.2V21H3V13.8ZM13.8 3H21V10.2H13.8V3ZM13.8 13.8H21V21H13.8V13.8Z" fill="white"/>
                </svg>
                    <div className="text-base font-semibold leading-6 text-white cursor-pointer">Overview</div>
                </a>
            </div>
            <div className="flex flex-col pl-[27px]">
                <a
                    href="/starships"
                    className={`flex flex-row mt-[30px] px-6 py-4 gap-4 items-center ${
                        window.location.pathname === '/starships' ? 'bg-[#0A74DC] rounded w-[232px] h-12' : ''
                    }`}
                    onClick={() => handleLinkClick('/starships')}
                >
                    <div className="bg-[#A9C1FF] h-4 w-[17px] rounded-md"></div>
                    <div className="text-base font-semibold leading-6 text-white">Starships</div>
                </a>
                <a
                    href="/people"
                   className={`flex flex-row mt-[30px] px-6 py-4 gap-4 items-center ${
                       window.location.pathname === '/people' ? 'bg-[#0A74DC] rounded w-[232px] h-12' : ''
                   }`}
                   onClick={() => handleLinkClick('/people')}
                >
                    <div className="bg-[#FFA9EC] h-4 w-[17px] rounded-md"></div>
                    <div className="text-base font-semibold leading-6 text-white">People</div>
                </a>
                <a
                    href="/species"
                   className={`flex flex-row mt-[30px] px-6 py-4 gap-4 items-center ${
                       window.location.pathname === '/species' ? 'bg-[#0A74DC] rounded w-[232px] h-12' : ''
                   }`}
                   onClick={() => handleLinkClick('/species')}
                >
                    <div className="bg-[#FDFFA9] h-4 w-[17px] rounded-md"></div>
                    <div className="text-base font-semibold leading-6 text-white">Species</div>
                </a>
            </div>
        </div>
    );
};

export default SideBarMenu;