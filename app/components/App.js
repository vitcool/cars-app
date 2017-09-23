import SelectModel from './SelectModel.js';
import SelectVendor from './SelectVendor.js';
import { connect } from 'react-redux'

import React from "react";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            data:[]
       }
    }
  render() {
    console.log(this.props.testStore);
    return <div>
        <div>Car catalog app</div>
        <SelectVendor vendors={this.state.data}/>
    </div>;
  }

}
export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);