// People.tsx
import React from 'react';
import Table from './Table';
import SideBarMenu from "./sideBarMenu";
import MenuBar from "./menuBar";
import {useNavigate} from "react-router-dom";

interface People {
    id: number;
    name: string;
    classification: string;
    eyeColors: string;
    hairColor: number;
    height: string;
    created: string;
}

const People: React.FC = () => {
    const navigate = useNavigate();

    const people: People[] = [
        // ... starships data
    ];

    const handlePersonClick = (personId: number) => {
        navigate(`/people/${personId}`);
    };

    const peopleColumns = [
        { label: 'Name', key: 'name' },
        { label: 'Birth Year', key: 'birthYear' },
        { label: 'Gender', key: 'gender' },
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
                    <Table title="People" data={people} columns={peopleColumns} onRowClick={handlePersonClick} />
                </div>
            </div>
            {/* Other content in the People component */}
        </div>
    );
};

export default People;
