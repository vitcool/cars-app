import Dropdown from "react-dropdown";
var React = require("react");
import $ from "jquery";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class SelectVendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorsList: []
    };
  }
  componentDidMount() {
    this.search("https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes");
  }
  search(url) {
    $.ajax({
      url: url,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ vendorsList: data.Makes });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  makeDDL() {
    let result;
    if (this.state.vendorsList.length) {
      result = this.state.vendorsList.map((vendor, index) => {
        return <Link to={"/model/" + vendor.make_id} className="list-group-item" key={index}>{vendor.make_display}</Link>;
      });
    }
    return <div className="list-group" >{result}</div>;
  }
  render() {
    return (
      <div>
        Please, select the vendor from list
          {this.makeDDL()}
      </div>
    );
  }
}
