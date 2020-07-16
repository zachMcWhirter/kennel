import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalForm.css";
import EmployeeManager from "../../modules/EmployeeManager";

// This component will populate the input fields with the current values from the API. We will obtain the animal details via a fetch call using a useEffect() hook.

// Here is the flow of the AnimalEditForm component:

// 1) Component loads - Save button should be disabled since the data is not available yet.
// 2) The function passed to useEffect() calls API to get the animal based on the animalId in the URL.
// 3) Data loads and setAnimal() is invoked with new data (also set isLoading to false)
// 4) The component is rendered to the DOM, displaying animal details and ready for edits.
// 5) Make changes. As changes are made, state is updated. Select save.
// 6) The updateExistingAnimal method will call setIsLoading(true) - this ensures the user cannot       repeatedly click button while API is being updated.
// 7) Invoke AnimalManger.update() to change the API data.
// 8) Once the API has updated, change the view to display all the animals.

const AnimalEditForm = props => {
    const [animal, setAnimal] = useState({ 
      name: "", 
      breed: "", 
      image: "",
      employeeId: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    // This is setting state for employees that are responsible for each animal
    // We need the empty array here so we can use map() method to go thru the employees and match them to the animals they are caring for. and visa versa
    const [employees, setEmployees] = useState([]);

    // This is an event that is triggered 
    const handleFieldChange = evt => {

        const stateToChange = { ...animal };
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange);
    };

    const updateExistingAnimal = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need to use the id
        const editedAnimal = {
            id: props.match.params.animalId,
            name: animal.name,
            breed: animal.breed,
            image: animal.image,

            // This will parse the "" string value of employeeId from const AnimalEditForm and make it an integer
            employeeId: parseInt(animal.employeeId)
        };
        
        AnimalManager.update(editedAnimal)
        .then(() => props.history.push("/animals")) 
    }
    
      // This is where we select an animal, get that animalId, and set it. Then we go thru each one, comparing it the employees 
      useEffect(() => {
        AnimalManager.get(props.match.params.animalId)
          .then(animal => {
            EmployeeManager.getAll()
            .then(employees => {
              setEmployees(employees)
              setAnimal(animal);
              setIsLoading(false);
            })
      });
  } , [props.match.params.animalId]);

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
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>

            <input 
                type="text"
                required
                onChange={handleFieldChange}
                id="image"
                value={animal.image}
                />
            <label htmlFor="image">Image</label>

            {/* (chap 13) */}
            <select
              className="form-control"
              id="employeeId"
              value={animal.employeeId}
              onChange={handleFieldChange}
            >
              {/* This is where we mao thru the employees array and display them in a selection box (dropdown) */}
              {employees.map(employee =>
                <option key={employee.id} value={employee.id}>
                  {employee.name}</option>
              )}
            </select>
            <label htmlFor="employeeId">Employee</label>
          </div>
          
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalEditForm;