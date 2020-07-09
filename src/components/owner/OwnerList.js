import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import OwnerCard from './OwnerCard';

//This module will initiate the OwnerManager getAll() call, hold on to the returned data, and then render the <OwnerCard /> component for each Owner.

const OwnerList = () => {
    // The initial state is an empty array
    const [owners, setOweners] = useState([]);

    const getOwners = () => {
        //  After the data comes back from the API, we
        //  use the setOwners function to update state
        return OwnerManager.getAll().then(ownersFromAPI => {
            setOweners(ownersFromAPI);
        });
    };

    // got the owners from the API on the component's first render
    useEffect(() => {
        getOwners();
    }, []);

    // Finally we use map() to "loop over" the owners array to show a list of owner cards
    return (
        <div className="container-cards">
            {owners.map(owner => <OwnerCard key={owner.id} owner={owner} />)}
        </div>
    );
};

export default OwnerList;