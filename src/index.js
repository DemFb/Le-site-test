import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import "./index.css";
import  Home from "./Home";
import  Api from "./Api";
import  setupUnit from "./setupUnit";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
     <Router>
          <Route exact path ="/home" component={Home}/>
          <Route exact path ="/api" component={Api}/>
          <Route exact path ="/setupUnit" component={setupUnit}/>
          <Redirect from="/" to="/home" />
      </Router>,
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
