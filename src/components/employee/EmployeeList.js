import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import EmployeeCard from './EmployeeCard';

//This module will initiate the EmployeeManager getAll() call, hold on to the returned data, and then render the <EmployeeCard /> component for each Employee.

const EmployeeList = (props) => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        //  After the data comes back from the API, we
        //  use the setEmployees function to update state
        return EmployeeManager.getAll().then(employeesFromAPI => {
            setEmployees(employeesFromAPI);
        })
    };

    // got the employees from the API on the component's first render
    useEffect(() => {
        getEmployees();
    }, []);

    const deleteEmployee = id => {
        EmployeeManager.delete(id)
            .then(() => EmployeeManager.getAll().then(setEmployees));
    };



    // Finally we use map() to "loop over" the employees array to show a list of employee cards
    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/employees/new") }}>
                    Hire New Employee
                </button>
            </section>
            <div className="container-cards">
                {employees.map(employee =>
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        deleteEmployee={deleteEmployee} />)}
            </div>
        </>
    );
};

export default EmployeeList