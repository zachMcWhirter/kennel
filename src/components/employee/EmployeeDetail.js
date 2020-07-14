import React, { useState, useEffect } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeDetail.css"


const EmployeeDetail = props => {
    const [employee, setEmployee] = useState({
        name: "",
        job: "",
        image: ""
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        EmployeeManager.get(props.employeeId)
            .then(employee => {
                setEmployee({
                    name: employee.name,
                    job: employee.job,
                    image: employee.image
                });
                setIsLoading(false);
            });
    }, [props.employeeId]);

    const handleDelete = () => {
        setIsLoading(true);
        EmployeeManager.delete(props.employeeId)
        .then(() => {
            props.history.push("/employees")
        });
    };

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={(employee.image)} alt="Worker" />
                </picture>
                <h3> <span style={{ color: 'darkslategrey' }}>{employee.name}</span></h3>
                <p>{employee.job}</p>
                <button type="button" disabled={isLoading} onClick={handleDelete}>
                    Fire Employee
          </button>
            </div>
        </div>
    );
}

export default EmployeeDetail;