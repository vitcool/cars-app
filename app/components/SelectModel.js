var React = require("react");
var axios = require("axios");
import $ from "jquery";

export default class SelectModel extends React.Component {
  componentDidMount() {
    // axios
    //   .get(
    //     "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford"
    //   )
    //   .then(response => {
    //     console.log(response.data.url);
    //     console.log(response.data.explanation);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });


      $.ajax({
        url: "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford",
        dataType: "json",
        cache: false,
        success: function(data) {
            console.log(data);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  }
  render() {
    return <div>Select Model</div>;
  }
}
