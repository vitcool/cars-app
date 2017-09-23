var React = require("react");
var axios = require("axios");
import $ from "jquery";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class SelectModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelsList: []
    };
  }
  componentDidMount() {
    $.ajax({
      url:
        "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=" +
        this.props.match.params.model_id,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ modelsList: data.Models });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  makeDDL() {
    let result;
    if (this.state.modelsList.length) {
      result = this.state.modelsList.map((model, index) => {
        return (
          <Link
            to={"/car/" + this.props.match.params.model_id  + "/" + model.model_name}
            className="list-group-item"
            key={index}
          >
            {model.model_name}
          </Link>
        );
      });
    }
    return <div className="list-group">{result}</div>;
  }
  render() {
    return (
      <div>
        <div>
          {this.makeDDL()}
        </div>
      </div>
    );
  }
}
