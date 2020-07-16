import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import AnimalManager from "../../modules/AnimalManager"

// (chap 13) this entire component was created in chap 13  - This component will display a single employee and include an <AnimalCard> for each animal. We can re-use the previously created AnimalCard component. This component will accept props and return the employee name and then map over the animals returning <AnimalCard> for only the pets the employee is responsible for.

const EmployeeWithAnimals = props => {
    const [employee, setEmployee] = useState({});
    const [animals, setAnimals] = useState([]); 

    // (chap 13) - Added this as a part of the delete button fix
    const [isLoading,setIsLoading] = useState(false);
    
    // (chap 13) - Added this to fix the delete functionality on the detail card. If we discharge an animal from the EmployeeWithAnimals component, we will receive an error props.deleteAnimal is not a function. There are a few of ways to handle this situation. I chose to use this one: Include the same handleDelete function within <EmployeeWithAnimals>
    const handleDelete = (id) => {
        setIsLoading(true);
        AnimalManager.delete(id)
        .then(() => 
            props.history.push("/employees")
        )
      };

    useEffect(() => {
        // (chap 13) - Now make call to get employee with animal
        EmployeeManager.getWithAnimals(props.match.params.employeeId)
        .then(APIResult => {
            setEmployee(APIResult);
            setAnimals(APIResult.animals);
        });
    }, []);

    // Return the employee name and then map over the animals returning <AnimalCard> for only the pets the employee is responsible for.
    return (
        <div className="card">
            <p>Employee: {employee.name}</p>
            {animals.map(animal =>
                <AnimalCard
                    key={animal.id}
                    animal={animal}

    // (chap 13) - Added next 2 lines to fix the delete functionality on the detail card
                    deleteAnimal={handleDelete}
                    disabled={isLoading}
                    {...props}
                />
            )}
        </div>
    );
};

export default EmployeeWithAnimals;