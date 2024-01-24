// Species.tsx
import React, {useEffect} from 'react';
import Table from '../shared/Table';
import SideBarMenu from "../shared/sideBarMenu";
import MenuBar from "../shared/menuBar";
import TableComponent from "../shared/TableComponent";
import {FilmsProps} from "./films";

const detailsProperties = [
    { label: 'Designation', key: 'designation' },
    { label: 'Language', key: 'language' },
    { label: 'Eye Colors', key: 'eye_colors' },
    { label: 'Average Life Span', key: 'average_lifespan' },
];

const Species: React.FC<FilmsProps> = ({setCardState, closeDetails}) => {
    const speciesColumns = [
        { label: 'Name', key: 'name' },
        { label: 'Classification', key: 'classification' },
        { label: 'Eye Colors', key: 'eye_colors' },
        { label: 'Hair Color', key: 'hair_colors' },
        { label: 'Height', key: 'average_height' },
        { label: 'Created', key: 'created' }
    ];

    useEffect(() => {
        setCardState(false, true);
        return () => {

        }
    }, []);

    return (
        <div>
            {/*cardsMenu*/}
            <TableComponent detailsOpened={() => setCardState(false, true)}  closeDetails={closeDetails} title="Species" columns={speciesColumns} details={detailsProperties} identity="episode_id" detailsImg="../../assets/species-img-card.png" endpoint="https://swapi.dev/api/species/" />
        </div>
    );
};

export default Species;
