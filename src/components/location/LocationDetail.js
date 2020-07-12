
import React, {useState, useEffect} from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css"

const LocationDetail = props => {
    const [location, setLocation] = useState({name: "",city: "", image: "" });

    useEffect(() => {
        LocationManager.get(props.locationId)
        .then(location => {
            setLocation({
                name: location.name,
                city: location.city,
                image: location.image
            });
        });
    }, [props.locationId]);

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={(location.image)} alt="Worker" />
                </picture>
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
                <p>City: {location.city}</p>
            </div>
        </div>
    );
}

export default LocationDetail;