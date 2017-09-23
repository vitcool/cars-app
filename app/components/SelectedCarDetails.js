var React = require("react");
import $ from "jquery";
import { Link } from "react-router-dom";

export default class SelectCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carDetails: []
    };
  }
  componentDidMount() {
    $.ajax({
      url:
        "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=" +
        this.props.match.params.model_id,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ carDetails: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  getData() {
    if (this.state.carDetails[0]) {
      return (
        <div>
          <h2>{this.state.carDetails[0].make_display} {this.state.carDetails[0].model_name} {this.state.carDetails[0].model_engine_l}</h2>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div>{this.getData()}</div>
      </div>
    );
  }
}
