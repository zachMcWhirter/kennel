import React from "react";
import "./Employee.css"

const EmployeeCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={(props.employee.image)} alt="Worker" />
                </picture>
                <h3>
                    Name: <span className="card-employeeName">{props.employee.name}</span>
                </h3>
                <p>Job: {props.employee.job}</p>
                <button className="delete" type="button" 
                    onClick={() => props.deleteEmployee(props.employee.id)}>Fire Employee
                </button>
            </div>
        </div>
    );
};

export default EmployeeCard;