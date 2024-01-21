// PersonDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
    const { id } = useParams(); // Access the person ID from the URL parameters

    // Fetch and display details for the person with the given ID

    return (
        <div>
            {/* Display details of the person */}
            <h2>Details for Person {id}</h2>
        </div>
    );
};

export default PersonDetails;
