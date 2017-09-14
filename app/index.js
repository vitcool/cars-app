import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import SelectModel from "./components/SelectModel";
import SelectVendor from "./components/SelectVendor";
import About from "./components/About";
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
      <Route path="/model" component={SelectModel} />
      <Route path="/vendor" component={SelectVendor} />
      <Route path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById("app")
);
