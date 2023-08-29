//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";

//import your own components
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Cards from "./component/cards.jsx";
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.render(<Navbar />, document.querySelector("#navbar"));
ReactDOM.render(<Jumbotron />, document.querySelector("#jumbotron"));
ReactDOM.render(<Cards
    title="Titulo 1"
    image={image1}
    text="Este es un modelo de texto para el card 1, mediante el uso de props para la práctica de React."
    label="Primer botón"
/>, document.querySelector("#cards1"));
ReactDOM.render(<Cards
    title="Titulo 2"
    image={image2}
    text="Este es un modelo de texto para el card 2, mediante el uso de props para la práctica de React."
    label="Segundo botón"
/>, document.querySelector("#cards2"));
ReactDOM.render(<Cards
    title="Titulo 3"
    image={image3}
    text="Este es un modelo de texto para el card 3, mediante el uso de props para la práctica de React."
    label="Tercer botón"
/>, document.querySelector("#cards3"));
ReactDOM.render(<Cards
    title="Titulo 4"
    image={image4}
    text="Este es un modelo de texto para el card 4, mediante el uso de props para la práctica de React."
    label="Cuarto botón"
/>, document.querySelector("#cards4"));
ReactDOM.render(<Footer name="Yohan Mayorga" />, document.querySelector("#footer"));
