import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Cards from "./cards";
import SideBarMenu from "./sideBarMenu";
import MenuBar from "./menuBar";
import Films from "./films";

// Import statements...

const Home = () => {
    const navigate = useNavigate();
    const [films, setFilms] = useState([]);

    // Function to fetch film data
    const fetchFilms = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();
            setFilms(data.results); // Assuming the film data is in the 'results' property
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    useEffect(() => {
        fetchFilms();
    }, []); // Fetch films when the component mounts

    const handleFilmClick = (filmId: number) => {
        navigate(`/film-details/${filmId}`);
    };

    return (
        <div className="flex flex-row overflow-x-hidden">
            {/*sidemenu*/}
            <SideBarMenu />
            {/*homepage*/}
            <div className="flex flex-col flex-1 w-100vw">
                {/*menubar*/}
                <MenuBar />
                {/*main-page*/}
                <div className="flex flex-col pl-[38px] pr-[42px] pt-11 pb-12">
                    {/*cardsMenu*/}
                    <Cards />
                    {/* Pass the films data to the Films component */}
                    <Films films={films} onFilmClick={handleFilmClick} />
                </div>
            </div>
        </div>
    );
};

export default Home;
