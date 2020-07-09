import React from "react";
import "./Location.css"

const LocationCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img className="location_img"src={require("./location.jpg")} alt="Worker" />
                </picture>
                <h3>
                    Name: <span className="card-locationName">{props.location.name}</span>
                </h3>
                <p>City: {props.location.city}</p>
            </div>
        </div>    
    );
};

export default LocationCard;