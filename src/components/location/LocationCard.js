import React from "react";

const LocationCard = () => {
    return (
        <div className="card-content">
            <picture>
                <img class="location_img"src={require("./location.jpg")} alt="Worker" />
            </picture>
            <h3>
                Name: <span className="card-locationName">Downtown</span>
            </h3>
            <p>City: Central City</p>
        </div>
    );
};

export default LocationCard;