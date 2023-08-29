//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

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
    url="https://images.unsplash.com/photo-1635197425857-2850b3dfc633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyZSUyMHNxdWFyZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    text="Este es un modelo de texto para el card 1, mediante el uso de props para la práctica de React."
    label="Primer botón"
/>, document.querySelector("#cards1"));
ReactDOM.render(<Cards
    title="Titulo 2"
     url="https://images.unsplash.com/photo-1621342261924-3e2f6c9603f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZSUyMHNxdWFyZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    text="Este es un modelo de texto para el card 2, mediante el uso de props para la práctica de React."
    label="Segundo botón"
/>, document.querySelector("#cards2"));
ReactDOM.render(<Cards
    title="Titulo 3"
     url="https://images.unsplash.com/photo-1692320152541-8a5153a445d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZSUyMHNxdWFyZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    text="Este es un modelo de texto para el card 3, mediante el uso de props para la práctica de React."
    label="Tercer botón"
/>, document.querySelector("#cards3"));
ReactDOM.render(<Cards
    title="Titulo 4"
     url="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG5hdHVyZSUyMHNxdWFyZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    text="Este es un modelo de texto para el card 4, mediante el uso de props para la práctica de React."
    label="Cuarto botón"
/>, document.querySelector("#cards4"));
ReactDOM.render(<Footer name="Yohan Mayorga" />, document.querySelector("#footer"));
