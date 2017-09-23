var React = require("react");
import $ from "jquery";
import { Link } from "react-router-dom";

export default class SelectCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carProperties: []
    };
  }
  componentDidMount() {
    $.ajax({
      url:
        "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&make=" +
        this.props.match.params.model_id + "&model=" + this.props.match.params.model_name,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ carProperties: data.Trims });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  makeDDL() {
    let result;
    if (this.state.carProperties.length) {
      result = this.state.carProperties.map((car, index) => {
        return (
          <Link
          to={"/selectedcar/" + car.model_id}
          className="list-group-item"
          key={index}
        >
        {car.model_make_id} {car.model_name} {car.model_trim}
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
