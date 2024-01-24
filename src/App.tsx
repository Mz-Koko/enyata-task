import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/home";
import People from "./Components/feature/people";
import Starships from "./Components/feature/starships";
import Species from "./Components/feature/species";
import Films from "./Components/feature/films";
import SideBarMenu from "./Components/shared/sideBarMenu";
import Cards from "./Components/cards";
import MenuBar from "./Components/shared/menuBar";
import login from "./pages/Login";

function App() {
    const [backShown, showBack] = useState(false);
    const [detailsClosed, closeDetails] = useState(true);
    const [cardsShown, showCards] = useState(false);
    const [isAuth, setAuthState] = useState(false);

    const updateCardState = (card: boolean, details: boolean)  =>{
        showCards(card);
        console.log("1:1", cardsShown, window.location.pathname);
        setAuthState(true);
        if(details){
            showBack(true);
            closeDetails(false)
        }
    };

    const backClicked = () => {
        closeDetails(true);
        showBack(false);
    }

    const loggedIn = () =>{
        setAuthState(true);
    }
    useEffect(() => {
        closeDetails(true);
        showBack(false);
    }, []);

    return (
    <div className="flex flex-row">
        {isAuth && <SideBarMenu />}
        <div className="flex flex-col flex-1 w-100vw overflow-x-hidden">
            {/*menubar*/}
            {isAuth && <MenuBar showBack={backShown} goBack={backClicked}/>}
            {/*main-page*/}
            <div className="flex flex-col">
                {/*cardsMenu*/}
                {cardsShown && <Cards />}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login login={loggedIn}/>}></Route>
                        <Route path="/films" element={<Films closeDetails={detailsClosed} setCardState={updateCardState}/>}></Route>
                        <Route path="/home" element={<Films closeDetails={detailsClosed} setCardState={updateCardState}/>}>
                            {/*<Route path="home/films/:id" element={<FilmDetails />} />*/}
                        </Route>
                        <Route path="/people" element={<People closeDetails={detailsClosed} setCardState={updateCardState}/>}>
                            {/*<Route path="/people/:id" element={<PersonDetails />} />*/}
                        </Route>
                        <Route path="/starships" element={<Starships closeDetails={detailsClosed} setCardState={updateCardState}/>}>
                            {/*<Route path="/starships/:id" element={<StarshipDetails />} />*/}
                        </Route>
                        <Route path="/species" element={<Species closeDetails={detailsClosed} setCardState={updateCardState}/>}>
                            {/*<Route path="/species/:id" element={<SpecieDetails/>} />*/}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
        {/* Other content in the Starship component */}
    </div>
    );
}


export default App;
