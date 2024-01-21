// Films.tsx
import React from 'react';
import Table from './Table';

interface Film {
    id: number;
    title: string;
    releaseDate: string;
    director: string;
    producer: string;
    episode_id: number;
    character: string;
}

interface FilmsProps {
    films: Film[];
    onFilmClick: (filmId: number) => void; // Declare the callback function
}


const Films: React.FC<FilmsProps> = ({ films, onFilmClick }) => {

    // const films: Film[] = [
    //     // ... films data
    // ];

    const filmColumns = [
        { label: 'Film Title', key: 'title' },
        { label: 'Release Date', key: 'release_date' },
        { label: 'Director', key: 'director' },
        { label: 'Producer', key: 'producer' },
        { label: 'Episode ID', key: 'episode_id' },
        { label: 'Character', key: 'character' },
    ];

    const handleFilmClick = (filmId: number) => {
        // Call the parent component's onFilmClick callback
        onFilmClick(filmId);
    };
    return (
        <div>
            <Table title="Films" data={films} columns={filmColumns} onRowClick={handleFilmClick} />
        </div>
    );
};

export default Films;
