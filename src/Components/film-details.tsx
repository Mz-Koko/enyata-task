import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface FilmDetails {
    title: string;
    release_date: string;
    director: string;
    producer: string;
    episode_id: number;
    // Remove character if not needed
}

const FilmDetails: React.FC = () => {
    const { id } = useParams();
    const [filmDetails, setFilmDetails] = useState<FilmDetails | null>(null);

    useEffect(() => {
        const fetchFilmDetails = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/films/${id}/`);
                const data = await response.json();
                setFilmDetails(data);
            } catch (error) {
                console.error('Error fetching film details:', error);
            }
        };

        fetchFilmDetails();
    }, [id]);

    if (!filmDetails) {
        return <div>Loading...</div>; // You can replace this with a loading indicator
    }

    return (
        <div className="flex flex-row gap-7 px-7 pt-11">
            <div>
                <img src="../../src/assets/film-img-card.png" alt="Movie Image" />
            </div>
            <div className="flex flex-col">
                <div className="text-black text-4xl leading-6 font-bold">
                    {filmDetails.title}
                </div>
                <div>Release Date: {filmDetails.release_date}</div>
                <div>Director: {filmDetails.director}</div>
                <div>Producer: {filmDetails.producer}</div>
                <div>Episode ID: {filmDetails.episode_id}</div>
                {/* Add other details here */}
            </div>
        </div>
    );
};

export default FilmDetails;
