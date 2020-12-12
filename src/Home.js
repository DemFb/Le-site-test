import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route, Link} from "react-router-dom";
import "./App.css";
import Header from"./Header";
import setupUnit from "./setupUnit";
import Footer from"./Footer";
import Api from './Api';



function Home() {

  return(
    <div className="Home">
      < Header />
      <div className="landing">
        <div className="container">
          <h1 className="display-4">Bienvenue sur le site test !</h1>
          <p className="lead">Un petit site sympa avec quelques animations, le sujet du test et un lien cacher qui pourra changer votre vie</p>
          <div className="buttonContainer">
              <Link to="/Api">
              <a href="/Api" rel="noreferrer">
                <button type="button" className="btn btn-light">Voir la liste</button>
              </a>    
              </Link>
              <Route exact path="/setupUnit" component={setupUnit}/>
              <Link to="/setupUnit"> 
              <a href="/setupUnit" rel="noreferrer">
                <button type="button" className="btn btn-light">Bonus</button>
              </a>
              </Link>
              <Route exact path="/Api" component={Api}/>
  
          </div>
        </div>
       
      </div>
      < Footer />
    </div>
  
  );
}
export default Home;

