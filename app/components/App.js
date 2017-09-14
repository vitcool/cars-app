import SelectModel from './SelectModel.js';
import SelectVendor from './SelectVendor.js';

import React from "react";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            data:[]
       }
    }
  render() {
    return <div>
        <div>Car catalog app</div>
        <SelectVendor vendors={this.state.data}/>
    </div>;
  }

}
export default App;