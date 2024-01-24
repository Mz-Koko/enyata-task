// People.tsx
import React, {useEffect} from 'react';
import Table from '../shared/Table';
import SideBarMenu from "../shared/sideBarMenu";
import MenuBar from "../shared/menuBar";
import {useNavigate} from "react-router-dom";
import TableComponent from "../shared/TableComponent";
import {FilmsProps} from "./films";

interface People {
    id: number;
    name: string;
    eyeColors: string;
    hairColor: number;
    height: string;
    created: string;
}

const People: React.FC<FilmsProps> = ({setCardState, closeDetails}) => {

    const peopleColumns = [
        { label: 'Name', key: 'name' },
        { label: 'Birth Year', key: 'birth_year' },
        { label: 'Gender', key: 'gender' },
        { label: 'Hair Color', key: 'hair_color' },
        { label: 'Height', key: 'height' },
        { label: 'Created', key: 'created' }
    ];

    const detailsProperties = [
        { label: 'Gender', key: 'gender' },
        { label: 'Year of Birth', key: 'birth_year' },
        { label: 'Hair Color', key: 'hair_color' },
        { label: 'Height', key: 'height' },
    ];

    useEffect(() => {
        setCardState(false, true);
        return () => {

        }
    }, []);

    return (
        <div>
            {/*cardsMenu*/}
            <TableComponent detailsOpened={() => setCardState(false, true)} closeDetails={closeDetails}  title="People" columns={peopleColumns} details={detailsProperties} identity="episode_id" detailsImg="../../assets/people-img-card.png" endpoint="https://swapi.dev/api/people/" />
        </div>
    );
};

export default People;
