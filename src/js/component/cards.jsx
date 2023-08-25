import React from "react";

const Cards = (props) => {
    return (
        <div className="card" style={{ width: "18rem", margin: "15px" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="../img/rigo-baby.jpg">{props.label}</a>
            </div>
        </div>
    );
};

export default Cards;