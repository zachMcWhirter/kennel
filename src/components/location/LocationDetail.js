
import React, {useState, useEffect} from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css"


const LocationDetail = props => {
    const [location, setLocation] = useState({name: "",city: "", image: "" });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        LocationManager.get(props.locationId)
        .then(location => {
            setLocation({
                name: location.name,
                city: location.city,
                image: location.image
            });
            setIsLoading(false);
        });
    }, [props.locationId]);

    const handleDelete = () => {
         //invoke the delete function in LocationManger and re-direct to the animal list.
        setIsLoading(true);
        LocationManager.delete(props.locationId).then(() => 
            props.history.push("/locations")
        );
    };

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={(location.image)} alt="Worker" />
                </picture>
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
                <p>City: {location.city}</p>
                <button type="button" disabled={isLoading} onClick={handleDelete}>
                    Close Location
                </button>
            </div>
        </div>
    );
};

export default LocationDetail;