import React from "react";

const OwnerCard = () => {
    return (
        <div className="card-content">
            <picture>
                <img src={require("./owner.jpg")} alt="Owner" />
            </picture>
            <h3>
                Name: <span className="card-ownerName">Sam Jackson</span>
            </h3>
        </div>
    )
}

export default OwnerCard;