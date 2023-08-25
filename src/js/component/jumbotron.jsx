import React from "react";

const Jumbotron = () => {
    return (
        <div class="jumbotron" style={{ padding: "50px", marginTop: "100px", marginLeft: "20px", marginRight: "20px", background: "#EAECEF", borderRadius: "15px" }}>
            <h1 class="display-4">A Warm Welcome!</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
                similique quaerat nam nobis illo aspernatur vita fugiat numquam repellat.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>
    );
};

export default Jumbotron;