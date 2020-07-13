import React, { useState } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

const LocationForm = (props) => {
    const [location, setLocation] = useState({ name: "", city: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...location};
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
    };

    const constructNewLocation = evt => {
        evt.preventDefault();
        if (location.name === "" || location.city === "") {
            window.alert("Please enter a location name and city");
        } else {
            setIsLoading(true);
            LocationManager.post(location)
                .then(() => props.history.push("./locations"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Location Name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="city"
                            placeholder="City"
                        />
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="image"
                            placeholder="url" />
                        <label htmlFor="image">Image</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewLocation}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default LocationForm;
