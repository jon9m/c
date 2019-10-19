import React, { Component } from 'react';

class App extends Component {


  //Constructor is default ES6 feature
  constructor(props) {
    super(props);

    this.state = {        //Setup state
      count: 0
    };                    //No side-effects

    console.log("Contructor called");
  }

  static getDerivedStateFromProps(props, state) {           //Static
    console.log("getDerivedStateFormProps");
    state = { ...state, count: 4 };                         //Sync state
    return state;                                           //Return state
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("ComponentDidMount called")
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {                                  //Cause side-effects
    console.log("In Render ", this.state);    //Don't call set state immediately or synchronously
    return (
      <div>

      </div>
    );
  }
}

export default App;
