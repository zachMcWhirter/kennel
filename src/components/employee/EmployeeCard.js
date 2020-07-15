import React from "react";
import "./Employee.css"
import { Link } from "react-router-dom";

const EmployeeCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={(props.employee.image)} alt="Worker" />
                </picture>
                <h3>
                    <span className="card-employeeName">{props.employee.name}</span>
                </h3>
                <p> {props.employee.job}</p>
                <button className="delete" type="button"
                    onClick={() => props.deleteEmployee(props.employee.id)}>Fire Employee
                </button>
                <button type="button"
                    onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
                    Edit
                </button>
                <Link to={`/employees/${props.employee.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default EmployeeCard;