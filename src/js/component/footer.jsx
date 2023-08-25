import React from "react";

const Footer = (props) => {
    return (
        <footer className="footer bg-dark">
            <div
                className="col-md-12 text-center text-white"
                style={{ alignItems: "center", padding: "50px" }}
            >
                <span className="text-white">Copyright © Your Website 2023. Hecho por {props.name}</span>
            </div>
        </footer>
    );
};

export default Footer;