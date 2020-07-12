import React from "react";
import "./Location.css"
import { Link } from "react-router-dom";


const LocationCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img className="location_img"src={(props.location.image)} alt="Worker" />
                </picture>
                <h3>
                    Name: <span className="card-locationName">{props.location.name}</span></h3>
                <p>City: {props.location.city}</p>
                <button className="delete" type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
                <Link to={`/locations/${props.location.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>    
    );
};

export default LocationCard;