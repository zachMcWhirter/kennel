import React from "react";

const EmployeeCard = () => {
    return (
        <div className="card-content">
            <picture>
                <img src={require("./worker.jpg")} alt="Worker" />
            </picture>
            <h3>
                Name: <span className="card-employeeName">Lumbergh</span>
            </h3>
            <p>Job: Middle Managment</p>
        </div>
    )
}

export default EmployeeCard;