import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Cards from "../Components/cards";
import SideBarMenu from "../Components/shared/sideBarMenu";
import MenuBar from "../Components/shared/menuBar";
import Films from "../Components/feature/films";
import {Film} from '../Components/feature/films';


// Import statements...

const Home = () => {
    const navigate = useNavigate();
    const [films, setFilms] = useState([]);
    const [showCards, setShowCards] =useState(true)

    const fetchFilms = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();

            // Extract the "url" property from each film and set the films state
            const filmsWithUrl = data.results.map((film: Film, index: number) => ({
                ...film,
                url: `https://swapi.dev/api/films/${index + 1}/`, // Assuming the index starts from 0
            }));

            setFilms(data.results.map((film: any) => ({ ...film, url: film.url })));
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    useEffect(() => {
        //fetchFilms();
    }, []); // Fetch films when the component mounts

    const handleFilmClick = (filmId: number) => {
        navigate(`/films/${filmId}`);


    };

    const toggleCards = () => {
        setShowCards(false)
    };


    return (
        <div className="flex flex-row overflow-x-hidden">
            {/*sidemenu*/}
            <SideBarMenu />
            {/*homepage*/}
            <div className="flex flex-col flex-1 w-100vw">
                {/*menubar*/}
                {/*<MenuBar />*/}
                {/*main-page*/}
                <div className="flex flex-col pl-[38px] pr-[42px] pt-11 pb-12">
                    {/*cardsMenu*/}
                    <Cards />
                    {/* Pass the films data to the Films component */}
                    {/*<Films />*/}
                </div>
            </div>
        </div>
    );
};

export default Home;
