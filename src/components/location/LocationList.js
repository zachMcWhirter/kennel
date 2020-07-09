import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import LocationCard from './LocationCard';

//This module will initiate the LocationManager getAll() call, hold on to the returned data, and then render the <LocationCard /> component for each Location.

const LocationList = () => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        //  After the data comes back from the API, we
        //  use the setLocations function to update state
        return LocationManager.getAll().then(locationsFromAPI => {
            setLocations(locationsFromAPI);
        })
    };

    // got the locations from the API on the component's first render
    useEffect(() => {
        getLocations();
    }, []);

    // Finally we use map() to "loop over" the locations array to show a list of location cards
    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard />)}
        </div>
    );
};

export default LocationList
