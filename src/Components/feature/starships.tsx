// Starship.tsx
import React, {useEffect} from 'react';
import TableComponent from "../shared/TableComponent";
import {FilmsProps} from "./films";

interface Starship {
    id: number;
    name: string;
    model: string;
    class: number;
    passenger: number;
    length: string;
    character: string;
}

const Starship: React.FC<FilmsProps> = ({setCardState, closeDetails}) => {

    const starshipColumns = [
        { label: 'Name', key: 'name' },
        { label: 'Model', key: 'model' },
        { label: 'Class', key: 'starship_class' },
        { label: 'Passenger', key: 'passengers' },
        { label: 'Length', key: 'length' },
        { label: 'Character', key: 'character' }
    ];
    const detailsProperties = [
        { label: 'Model', key: 'model' },
        { label: 'Passengers', key: 'passengers' },
        { label: 'Pilots', key: 'pilots' },
    ];

    useEffect(() => {
        setCardState(false, true);
        return () => {

        }
    }, []);

    return (
        <div>
            {/*cardsMenu*/}
            {/*<Table title="Starships" data={starships} columns={starshipColumns} />*/}

            <TableComponent detailsOpened={() => setCardState(false, true)} closeDetails={closeDetails} title="Starships" columns={starshipColumns} details={detailsProperties} detailsImg="../../assets/starship-img-card.png" identity="episode_id" endpoint="https://swapi.dev/api/starships/" />
        </div>
    );
};

export default Starship;
