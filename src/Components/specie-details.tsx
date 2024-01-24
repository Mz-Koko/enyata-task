import React from "react";
import {useParams} from "react-router-dom";

const SpecieDetails: React.FC = () => {
    const { id } = useParams(); // Access the specie ID from the URL parameters


    return (
        <div>fmjjfdj {id}</div>
    );
};

export default SpecieDetails;