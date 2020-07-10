import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

const AnimalDetail = props => {
    const [animal, setAnimal] = useState({ name: "", breed: "", image: "" });

    const [isLoading, setIsLoading] = useState(true);
    //   isLoading is a boolean value that will indicate whether or not the component is loading. A value of true should disable the button and a value of false should enable it. By putting isLoading in the component's state, we can trigger a re-render by changing its value.

    useEffect(() => {
        //get(id) from AnimalManager and keep the data. put it into state
        AnimalManager.get(props.animalId)
            .then(animal => {
                setAnimal({
                    name: animal.name,
                    breed: animal.breed,
                    image: animal.image
                });
                setIsLoading(false)
                // when isLoading changes to false, the button will become functional
                
            });
            
    }, [props.animalId]);

    const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        AnimalManager.delete(props.animalId).then(() =>
          props.history.push("/animals")
        );
      };

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require(animal.image)} alt="My Dog" />
                </picture>
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
                <p>Breed: {animal.breed}</p>
                <button type="button" disabled={isLoading} onClick={handleDelete}>
                    Discharge
                </button>
            </div>
        </div>
    );
}

export default AnimalDetail;