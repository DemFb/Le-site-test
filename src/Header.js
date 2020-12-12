import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function Header() {

    return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">Site Test</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/home" rel="noreferrer">Accueil <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="http://dembele-fabala.fr/" target="_blank" rel="noreferrer">Site portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/CV.pdf" target="_blank">CV</a>
                </li>
                <li className="nav-item" >
                    <a className="nav-link" href="https://linkedin.com/in/fabala-dembele" target="_blank" rel="noreferrer">Linkedin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/DemFb?tab=repositories" target="_blank" rel="noreferrer">Github</a>
                </li>
            </ul>
            <span className="navbar-text">
                Site Test Technique Mentor Goal
            </span>
        </div>
    </nav>

    )
}

export default Header;