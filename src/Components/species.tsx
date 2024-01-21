// Species.tsx
import React from 'react';
import Table from './Table';
import SideBarMenu from "./sideBarMenu";
import MenuBar from "./menuBar";

interface Species {
    id: number;
    name: string;
    classification: string;
    eyeColors: string;
    hairColor: number;
    height: string;
    created: string;
}

const Species: React.FC = () => {
    const species: Species[] = [
        // ... starships data
    ];

    const speciesColumns = [
        { label: 'Name', key: 'name' },
        { label: 'Classification', key: 'classification' },
        { label: 'Eye Colors', key: 'eyeColors' },
        { label: 'Hair Color', key: 'hairColor' },
        { label: 'Height', key: 'height' },
        { label: 'Created', key: 'created' }
    ];

    return (
        <div className="flex flex-row overflow-x-hidden">
            <SideBarMenu />
            <div className="flex flex-col flex-1 w-100vw">
                {/*menubar*/}
                <MenuBar />
                {/*main-page*/}
                <div className="flex flex-col pl-[38px] pr-[42px] pt-11 pb-12">
                    {/*cardsMenu*/}
                    <Table title="Species" data={species} columns={speciesColumns} />
                </div>
            </div>
            {/* Other content in the Species component */}
        </div>
    );
};

export default Species;
