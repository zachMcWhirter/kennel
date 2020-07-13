import React from "react";
import "./Location.css"
import { Link } from "react-router-dom";


const LocationCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img className="location_img"src={(props.locations.image)} alt="Store Location" />
                </picture>
                <h3>
                    Name: <span className="card-locationName">{props.locations.name}</span></h3>
                <p>City: {props.locations.city}</p>
                <button className="delete" type="button" onClick={() => props.deleteLocation(props.locations.id)}>Close Location
                </button>
                <button type="button"
                    onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>
                    Edit
                </button>
                <Link to={`/locations/${props.locations.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>    
    );
};

export default LocationCard;