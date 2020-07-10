import React from "react";
import "./Animal.css"
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'
// firstLetterCase will capitolize the first letter of the word for you


const AnimalCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={(props.animal.image)} alt="My Dog" />
                </picture>
                <h3>
                    Name: <span className="card-petname">{firstLetterCase(props.animal.name)}</span>
                </h3>
                <p>Breed: {props.animal.breed}</p>
                <button className="delete" type="button" onClick={() => props.deleteAnimal(props.animal.id)} >Discharge</button>
                <Link to={`/animals/${props.animal.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AnimalCard;
