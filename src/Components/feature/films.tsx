// Films.tsx
import React, {useEffect} from 'react';
import TableComponent from "../shared/TableComponent";

export interface Film {
    id: number;
    title: string;
    releaseDate: string;
    director: string;
    producer: string;
    episode_id: number;
    character: string;
    url: string;
}

export interface FilmsProps {
    closeDetails: boolean;
    setCardState: (card: boolean, details: boolean) => void; // Declare the callback function
}


const Films: React.FC<FilmsProps> = ({setCardState, closeDetails}) => {

    // const films: Film[] = [
    //     // ... films data
    // ];

    useEffect(() => {
        setCardState(true, false);
        return () => {

        }
    }, []);

    setCardState(true, false);
    const filmColumns = [
        { label: 'Film Title', key: 'title' },
        { label: 'Release Date', key: 'release_date' },
        { label: 'Director', key: 'director' },
        { label: 'Producer', key: 'producer' },
        { label: 'Episode ID', key: 'episode_id' },
        { label: 'Character', key: 'character' },
    ];

    const detailsProperties = [
        { label: 'Director', key: 'director' },
        { label: 'Producer', key: 'producer' },
        { label: 'Release Date', key: 'release_date' },
    ];

    return (
        <div>
            {/*cardsMenu*/}
            <TableComponent detailsOpened={() => setCardState(false, true)}  closeDetails={closeDetails} title="Films" columns={filmColumns} details={detailsProperties} identity="episode_id" detailsImg="../../assets/species-img-card.png" endpoint="https://swapi.dev/api/films/" />
        </div>
    );
};

export default Films;
