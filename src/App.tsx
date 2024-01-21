import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from "./Components/Login";
import Home from "./Components/home";
import People from "./Components/people";
import Starships from "./Components/starships";
import Species from "./Components/species";
import PersonDetails from "./Components/person-details";

function App() {

    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const [starships, setStarships] = useState([]);
    const [species, setSpecies] = useState([])

    useEffect(() => {
        // Fetch films data
        fetch('https://swapi.dev/api/films')
            .then(response => response.json())
            .then(data => setFilms(data.results))
            .catch(error => console.error('Error fetching films:', error));

        // Fetch people data
        fetch('https://swapi.dev/api/people')
            .then(response => response.json())
            .then(data => setPeople(data.results))
            .catch(error => console.error('Error fetching people:', error));

        // Fetch starships data
        fetch('https://swapi.dev/api/starships')
            .then(response => response.json())
            .then(data => setStarships(data.results))
            .catch(error => console.error('Error fetching starships:', error));

        // Fetch species data
        fetch('https://swapi.dev/api/species')
            .then(response => response.json())
            .then(data => setSpecies(data.results))
            .catch(error => console.error('Error fetching species:', error));
    }, []);


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/people" element={<People />}></Route>
                <Route path="/people/:id" element={<PersonDetails />} />

                {/*<Route path="/films/:id" element={<FilmsDetails />} />*/}
                {/*<Route path="/species/:id" element={<SpecieDetails/>} />*/}
                {/*<Route path="/starships/:id" element={<StarshipDetails />} />*/}

                <Route path="/starships" element={<Starships />}></Route>
                <Route path="/species" element={<Species />}></Route>
            </Routes>
        </BrowserRouter>
    );
};


export default App;
