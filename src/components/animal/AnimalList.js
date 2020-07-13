import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import AnimalCard from './AnimalCard';


//This module will initiate the AnimalManager getAll() call, hold on to the returned data, and then render the <AnimalCard /> component for each animal.

const AnimalList = (props) => {
    // The initial state is an empty array
    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        //  After the data comes back from the API, we
        //  use the setAnimals function to update state
        return AnimalManager.getAll().then(animalsFromAPI => {
            setAnimals(animalsFromAPI);
        });
    }

    // got the animals from the API on the component's first render
    useEffect(() => {
        getAnimals();
    }, []);

    const deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => AnimalManager.getAll().then(setAnimals));
    };

    // Finally we use map() to "loop over" the animals array to show a list of animal cards
    return (
        //add this button above your display of animal cards
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {props.history.push("/animals/new") }}>
                    Admit Animal
                </button>
            </section>
            <div className="container-cards">
                {animals.map(animal =>
                    <AnimalCard
                        key={animal.id}
                        animal={animal}
                        deleteAnimal={deleteAnimal}
                        {...props}
                    />
                )}
            </div>
        </>
    );
};

export default AnimalList