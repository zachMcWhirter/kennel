import React, { useState, useEffect } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

const LocationEditForm = props => {
    const [location, setLocation] = useState({ name: "", city: "", image: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...location };
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
    };

    const updateExistingLocation = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedLocation = {
            id: props.match.params.locationId,
            name: location.name,
            city: location.city,
            image: location.image
        };

        LocationManager.update(editedLocation)
            .then(() => props.history.push("/locations"))
    }

    useEffect(() => {
        LocationManager.get(props.match.params.locationId)
            .then(location => {
                setLocation(location);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={location.name}
                        />
                        <label htmlFor="name">Location name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="city"
                            value={location.city}
                        />
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="image"
                            value={location.image}
                        />
                        <label htmlFor="image">Image</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingLocation}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default LocationEditForm;