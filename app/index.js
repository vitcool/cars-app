import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import SelectModel from "./components/SelectModel";
import SelectVendor from "./components/SelectVendor";
import SelectCar from "./components/SelectCar";
import About from "./components/About";
import SelectedCarDetails from "./components/SelectedCarDetails";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <div className="row">
        <div className="col-md-6 text-center">
          <Link to="/">Home</Link>
        </div>
        <div className="col-md-6 text-center">
          <Link to="/about">About</Link>
        </div>
      </div>
      <Route exact path="/" component={App} />
      <Route path="/selectedcar/:model_id" component={SelectedCarDetails} />
      <Route path="/car/:model_id/:model_name" component={SelectCar} />
      <Route path="/model/:model_id" component={SelectModel} />      
      <Route path="/vendor" component={SelectVendor} />
      <Route path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById("app")
);
