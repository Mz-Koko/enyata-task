import React, {useEffect, useState} from "react";

const cards: React.FC = () => {

    // const [films, setFilms] = useState([]);
    // const [people, setPeople] = useState([]);
    // const [starships, setStarships] = useState([]);
    // const [species, setSpecies] = useState([])
    //
    // useEffect(() => {
    //     // Fetch films data
    //     fetch('https://swapi.dev/api/films')
    //         .then(response => response.json())
    //         .then(data => setFilms(data.results))
    //         .catch(error => console.error('Error fetching films:', error));
    //
    //     // Fetch people data
    //     fetch('https://swapi.dev/api/people')
    //         .then(response => response.json())
    //         .then(data => setPeople(data.results))
    //         .catch(error => console.error('Error fetching people:', error));
    //
    //     // Fetch starships data
    //     fetch('https://swapi.dev/api/starships')
    //         .then(response => response.json())
    //         .then(data => setStarships(data.results))
    //         .catch(error => console.error('Error fetching starships:', error));
    //
    //     // Fetch species data
    //     fetch('https://swapi.dev/api/species')
    //         .then(response => response.json())
    //         .then(data => setSpecies(data.results))
    //         .catch(error => console.error('Error fetching species:', error));
    // }, []);

    return (
        <div className="flex flex-row gap-14 justify-between mb-10 pl-[38px] pr-[42px] pt-11 pb-12">
            <div className="flex flex-row rounded-xl bg-white shadow-2xl w-[208px] h-[130px] px-[18px] pt-6 pb-[18px] justify-between">
                <a href="/films" className="flex flex-col">
                    <div className="text-[#303B54] text-base font-bold leading-6 pb-[23px]">Films</div>
                    <div className="text-[#434854] text-base font-bold leading-6">200</div>
                    <div className="text-[#00992B] text-[9px] font-normal leading-6">20 More than than yesterday</div>
                </a>
                <div className="flex bg-[#A9FFE0] w-[27px] h-[26px] rounded-md"></div>
            </div>
            <div className="flex flex-row rounded-xl bg-white shadow-2xl w-[208px] h-[130px] px-[18px] pt-6 pb-[18px] justify-between">
                <a href="/starships" className="flex flex-col">
                    <div className="text-[#303B54] text-base font-bold leading-6 pb-[23px]">Starship</div>
                    <div className="text-[#434854] text-base font-bold leading-6">200</div>
                    <div className="text-[#00992B] text-[9px] font-normal leading-6">20 More than than yesterday</div>
                </a>
                <div className="flex bg-[#A9C1FF] w-[27px] h-[26px] rounded-md"></div>
            </div>
            <div className="flex flex-row rounded-xl bg-white shadow-2xl w-[208px] h-[130px] px-[18px] pt-6 pb-[18px] justify-between">
                <a href="/people" className="flex flex-col">
                    <div className="text-[#303B54] text-base font-bold leading-6 pb-[23px]">People</div>
                    <div className="text-[#434854] text-base font-bold leading-6">200</div>
                    <div className="text-[#00992B] text-[9px] font-normal leading-6">20 More than than yesterday</div>
                </a>
                <div className="flex bg-[#FFA9EC] w-[27px] h-[26px] rounded-md"></div>
            </div>
            <div className="flex flex-row rounded-xl bg-white shadow-2xl w-[208px] h-[130px] px-[18px] pt-6 pb-[18px] justify-between">
                <a href="/species" className="flex flex-col">
                    <div className="text-[#303B54] text-base font-bold leading-6 pb-[23px]">Species</div>
                    <div className="text-[#434854] text-base font-bold leading-6">200</div>
                    <div className="text-[#00992B] text-[9px] font-normal leading-6">20 More than than yesterday</div>
                </a>
                <div className="flex bg-[#FDFFA9] w-[27px] h-[26px] rounded-md"></div>
            </div>
        </div>
    );
};

export default cards;