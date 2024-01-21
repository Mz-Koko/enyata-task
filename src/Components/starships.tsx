// Starship.tsx
import React from 'react';
import Table from './Table';
import SideBarMenu from "./sideBarMenu";
import MenuBar from "./menuBar";

interface Starship {
    id: number;
    name: string;
    model: string;
    class: string;
    passenger: number;
    length: string;
    character: string;
}

const Starship: React.FC = () => {
    const starships: Starship[] = [
        // ... starships data
    ];

    const starshipColumns = [
        { label: 'Name', key: 'name' },
        { label: 'Model', key: 'model' },
        { label: 'Class', key: 'class' },
        { label: 'Passenger', key: 'passenger' },
        { label: 'Length', key: 'length' },
        { label: 'Character', key: 'character' }
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
                    <Table title="Starships" data={starships} columns={starshipColumns} />
                </div>
            </div>
            {/* Other content in the Starship component */}
        </div>
    );
};

export default Starship;
