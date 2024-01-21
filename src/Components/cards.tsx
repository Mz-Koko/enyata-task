import React from "react";

const cards: React.FC = () => {

    return (
        <div className="flex flex-row gap-14 justify-between mb-10">
            <div className="flex flex-row rounded-xl bg-white shadow-2xl w-[208px] h-[130px] px-[18px] pt-6 pb-[18px] justify-between">
                <div className="flex flex-col">
                    <div className="text-[#303B54] text-base font-bold leading-6 pb-[23px]">Films</div>
                    <div className="text-[#434854] text-base font-bold leading-6">200</div>
                    <div className="text-[#00992B] text-[9px] font-normal leading-6">20 More than than yesterday</div>
                </div>
                <div className="flex bg-[#A9FFE0] w-[27px] h-[26px] rounded-md"></div>
            </div>
            <div className="flex flex-row rounded-xl bg-white shadow-2xl w-[208px] h-[130px] px-[18px] pt-6 pb-[18px] justify-between">
                <div className="flex flex-col">
                    <div className="text-[#303B54] text-base font-bold leading-6 pb-[23px]">Starship</div>
                    <div className="text-[#434854] text-base font-bold leading-6">200</div>
                    <div className="text-[#00992B] text-[9px] font-normal leading-6">20 More than than yesterday</div>
                </div>
                <div className="flex bg-[#A9C1FF] w-[27px] h-[26px] rounded-md"></div>
            </div>
            <div className="flex flex-row rounded-xl bg-white shadow-2xl w-[208px] h-[130px] px-[18px] pt-6 pb-[18px] justify-between">
                <div className="flex flex-col">
                    <div className="text-[#303B54] text-base font-bold leading-6 pb-[23px]">People</div>
                    <div className="text-[#434854] text-base font-bold leading-6">200</div>
                    <div className="text-[#00992B] text-[9px] font-normal leading-6">20 More than than yesterday</div>
                </div>
                <div className="flex bg-[#FFA9EC] w-[27px] h-[26px] rounded-md"></div>
            </div>
            <div className="flex flex-row rounded-xl bg-white shadow-2xl w-[208px] h-[130px] px-[18px] pt-6 pb-[18px] justify-between">
                <div className="flex flex-col">
                    <div className="text-[#303B54] text-base font-bold leading-6 pb-[23px]">Species</div>
                    <div className="text-[#434854] text-base font-bold leading-6">200</div>
                    <div className="text-[#00992B] text-[9px] font-normal leading-6">20 More than than yesterday</div>
                </div>
                <div className="flex bg-[#FDFFA9] w-[27px] h-[26px] rounded-md"></div>
            </div>
        </div>
    );
};

export default cards;